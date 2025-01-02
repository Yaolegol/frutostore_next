'use client';

import { ICatalogProduct } from '@/modules/pages/Catalog/types';
import { createContext } from 'react';

export interface ICartPageContext {
    productsInCart: ICatalogProduct[];
}

export const CartPageContext = createContext<ICartPageContext>({
    productsInCart: [],
});
