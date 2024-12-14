'use client';

import { ICatalogProduct } from '@/modules/Catalog/types';
import { createContext } from 'react';

export interface ICatalogContext {
    products: ICatalogProduct[];
}

export const CatalogContext = createContext<ICatalogContext>({
    products: [],
});
