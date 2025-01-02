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
} from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { URL_FILTERS_KEY } from '@/modules/Filters/constants';
import { stringifySearchParams } from '@/helpers/query';

interface IGetData {
    filters: string;
    page: string;
}

interface IProps {
    children: ReactNode;
    defaultData: ICatalogData | null;
}

const catalogService = new CatalogService();

export const CatalogProvider: FC<IProps> = ({ children, defaultData }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [currentSearchParams, setCurrentSearchParams] =
        useState(searchParams);
    const [paginationType, setPaginationType] = useState(0);
    const [data, setData] = useState<ICatalogData | null>(defaultData);

    const getPage = useCallback(() => {
        const page = searchParams.get(PAGE_QUERY_NAME) ?? 1;

        return Number(page);
    }, [searchParams]);

    const getData = useCallback(
        async ({ filters, page }: IGetData) => {
            const newData = await catalogService.getProducts({ filters, page });

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
        },
        [data, paginationType],
    );

    useEffect(() => {
        if (searchParams.toString() === currentSearchParams.toString()) {
            return;
        }

        const page = String(getPage());
        const filters = searchParams.get(URL_FILTERS_KEY) ?? '';

        setCurrentSearchParams(searchParams);
        getData({ filters, page });
    }, [currentSearchParams, getData, getPage, searchParams]);

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
