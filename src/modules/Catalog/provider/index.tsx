'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { CatalogService } from '@/modules/Catalog/service';
import { ICatalogData } from '@/modules/Catalog/types';
import { FC, useState, ReactNode, useMemo, useCallback } from 'react';

interface IProps {
    children: ReactNode;
    defaultData: ICatalogData | null;
}

const catalogService = new CatalogService();

export const CatalogProvider: FC<IProps> = ({ children, defaultData }) => {
    const [data, setData] = useState<ICatalogData | null>(defaultData);
    const [page, setPage] = useState(defaultData?.current_page ?? 1);

    const getNextPage = useCallback(async () => {
        if (!data) {
            return;
        }

        const nextPage = page + 1;
        const { last_page } = data;

        if (nextPage > last_page) {
            return;
        }

        const newData = await catalogService.getProducts({ page: nextPage });

        if (!newData) {
            return;
        }

        const products = data?.data ?? [];
        products.push(...newData.data);

        setData({
            ...newData,
            data: products,
        });

        setPage(nextPage);
    }, [data, page]);

    const value = useMemo(() => {
        if (!data) {
            return {
                products: [],
            };
        }

        const { data: products, last_page } = data;

        return {
            getNextPage,
            lastPage: last_page,
            page,
            products,
        };
    }, [data, getNextPage, page]);

    return (
        <CatalogContext.Provider value={value}>
            {children}
        </CatalogContext.Provider>
    );
};
