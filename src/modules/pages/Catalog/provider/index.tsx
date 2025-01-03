'use client';

import { PAGE_QUERY_NAME } from '@/modules/pages/Catalog/constants';
import { CatalogContext } from '@/modules/pages/Catalog/context';
import { CatalogService } from '@/modules/pages/Catalog/service';
import { ICatalogData } from '@/modules/pages/Catalog/types';
import { scrollToTop } from '@/helpers/scroll';
import {
    FC,
    useState,
    ReactNode,
    useMemo,
    useCallback,
    useEffect,
    useContext,
} from 'react';
import {
    ReadonlyURLSearchParams,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';
import { URL_FILTERS_KEY } from '@/modules/Filters/constants';
import { stringifySearchParams } from '@/helpers/query';
import { SORT_QUERY_NAME } from '@/modules/Sort/constants';
import { LangContext } from '@/modules/Lang/context';

interface IProps {
    children: ReactNode;
    defaultData: ICatalogData | null;
}

const catalogService = new CatalogService();

export const CatalogProvider: FC<IProps> = ({ children, defaultData }) => {
    const { langOption } = useContext(LangContext);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [currentLang, setCurrentLang] = useState<string>();
    const [currentSearchParams, setCurrentSearchParams] =
        useState<ReadonlyURLSearchParams>();
    const [paginationType, setPaginationType] = useState(0);
    const [data, setData] = useState<ICatalogData | null>(defaultData);

    const getPage = useCallback(() => {
        const page = searchParams.get(PAGE_QUERY_NAME) ?? 1;

        return Number(page);
    }, [searchParams]);

    const getData = useCallback(async () => {
        const page = String(getPage());
        const filters = searchParams.get(URL_FILTERS_KEY) ?? '';
        const sort = searchParams.get(SORT_QUERY_NAME) ?? '';
        const locale = langOption?.value;

        const newData = await catalogService.getProducts({
            filters,
            locale,
            page,
            sort,
        });

        if (!newData) {
            return;
        }

        if (paginationType === 1) {
            const products = data?.data ?? [];
            products.push(...newData.data);

            setData({
                ...newData,
                data: products,
            });

            setPaginationType(0);

            return;
        }

        setData(newData);
    }, [data, getPage, langOption, paginationType, searchParams]);

    useEffect(() => {
        const isSameData =
            searchParams.toString() === currentSearchParams?.toString() &&
            langOption?.value === currentLang;

        if (isSameData) {
            return;
        }

        setCurrentLang(langOption?.value);
        setCurrentSearchParams(searchParams);
        getData();
    }, [currentLang, currentSearchParams, getData, langOption, searchParams]);

    const setPaginationQuery = useCallback(
        (newPage: number) => {
            const urlSP = new URLSearchParams(window.location.search);
            urlSP.delete(PAGE_QUERY_NAME);

            if (newPage !== 1) {
                urlSP.append(PAGE_QUERY_NAME, String(newPage));
            }

            const query = stringifySearchParams(urlSP);

            router.push(pathname + query, {
                scroll: false,
            });
        },
        [pathname, router],
    );

    const toFirstPage = useCallback(async () => {
        const page = getPage();

        if (page === 1) {
            scrollToTop();

            return;
        }

        setPaginationQuery(1);

        scrollToTop();
    }, [getPage, setPaginationQuery]);

    const toLastPage = useCallback(async () => {
        if (!data) {
            return;
        }

        const page = getPage();
        const lastPage = data.last_page;

        if (page === lastPage) {
            return;
        }

        setPaginationQuery(lastPage);

        scrollToTop();
    }, [data, getPage, setPaginationQuery]);

    const getNextPage = useCallback(async () => {
        if (!data) {
            return;
        }

        const page = getPage();
        const nextPage = page + 1;
        const { last_page } = data;

        if (nextPage > last_page) {
            return;
        }

        setPaginationType(1);
        setPaginationQuery(nextPage);
    }, [data, getPage, setPaginationQuery]);

    const value = useMemo(() => {
        if (!data) {
            return {
                products: [],
            };
        }

        const { data: products, last_page } = data;
        const page = getPage();

        return {
            getNextPage,
            lastPage: last_page,
            page,
            products,
            toFirstPage,
            toLastPage,
        };
    }, [data, getNextPage, getPage, toFirstPage, toLastPage]);

    return (
        <CatalogContext.Provider value={value}>
            {children}
        </CatalogContext.Provider>
    );
};
