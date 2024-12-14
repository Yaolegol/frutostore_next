'use client';

import { ICatalogProduct } from '@/modules/Catalog/types';
import { createContext } from 'react';

export interface ICatalogContext {
    getNextPage?: () => Promise<void>;
    lastPage?: number;
    page?: number;
    products: ICatalogProduct[];
}

export const CatalogContext = createContext<ICatalogContext>({
    products: [],
});
