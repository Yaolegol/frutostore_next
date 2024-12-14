'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { CatalogService } from '@/modules/Catalog/service';
import { ICatalogData } from '@/modules/Catalog/types';
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
        const page = searchParams.get('page') ?? 1;

        return Number(page);
    }, [searchParams]);

    const getData = useCallback(
        async (newPage: number) => {
            const newData = await catalogService.getProducts({ page: newPage });

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

        const page = getPage();

        setCurrentSearchParams(searchParams);
        getData(page);
    }, [currentSearchParams, getData, getPage, searchParams]);

    const setPaginationQuery = useCallback(
        (newPage: number) => {
            const urlSP = new URLSearchParams(window.location.search);
            urlSP.delete('page');

            if (newPage !== 1) {
                urlSP.append('page', String(newPage));
            }

            const queryParams = urlSP.toString();
            const query = queryParams ? `?${queryParams}` : '';

            router.push(pathname + query);
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
