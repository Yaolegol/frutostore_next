'use client';

import { ICatalogProduct } from '@/modules/pages/Catalog/types';
import { createContext } from 'react';

export interface ICatalogContext {
    getNextPage?: () => Promise<void>;
    lastPage?: number;
    page?: number;
    products: ICatalogProduct[];
    toFirstPage?: () => Promise<void>;
    toLastPage?: () => Promise<void>;
}

export const CatalogContext = createContext<ICatalogContext>({
    products: [],
});
