'use client';

import {
    ICatalogData,
    ICatalogProduct,
    IQueryParams,
} from '@/modules/Catalog/types';
import { createContext } from 'react';

export interface ICatalogContext {
    getNextPage?: () => Promise<void>;
    getProducts?: (params: IQueryParams) => Promise<ICatalogData | null>;
    products: ICatalogProduct[];
}

export const CatalogContext = createContext<ICatalogContext>({
    products: [],
});
