'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { ICatalogData } from '@/modules/Catalog/types';
import { FC, useState, ReactNode, useMemo } from 'react';

interface IProps {
    children: ReactNode;
    defaultData: ICatalogData | null;
}

export const CatalogProvider: FC<IProps> = ({ children, defaultData }) => {
    const [data] = useState<ICatalogData | null>(defaultData);

    const value = useMemo(() => {
        if (!data) {
            return {
                products: [],
            };
        }

        const { data: products } = data;

        return {
            products,
        };
    }, []);

    return (
        <CatalogContext.Provider value={value}>
            {children}
        </CatalogContext.Provider>
    );
};
