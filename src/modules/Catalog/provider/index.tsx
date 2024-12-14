'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { CatalogService } from '@/modules/Catalog/service';
import { ICatalogData, IQueryParams } from '@/modules/Catalog/types';
import { FC, useState, ReactNode, useMemo, useCallback } from 'react';

interface IProps {
    children: ReactNode;
    defaultData: ICatalogData | null;
}

const catalogService = new CatalogService();

export const CatalogProvider: FC<IProps> = ({ children, defaultData }) => {
    const [data, setData] = useState<ICatalogData | null>(defaultData);

    const getProducts = useCallback(async (params: IQueryParams) => {
        const data = await catalogService.getProducts(params);

        setData(data);
    }, []);

    const value = useMemo(() => {
        if (!data) {
            return {
                products: [],
            };
        }

        const { data: products } = data;

        return {
            getProducts,
            products,
        };
    }, []);

    return (
        <CatalogContext.Provider value={value}>
            {children}
        </CatalogContext.Provider>
    );
};
