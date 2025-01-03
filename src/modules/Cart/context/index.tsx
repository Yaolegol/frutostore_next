'use client';

import { TCart } from '@/modules/Cart/types';
import { createContext } from 'react';

export interface ICartContext {
    addProductToCart?: (id: number) => void;
    cart: TCart;
    clearCard?: () => void;
    decrementProductInCard?: (id: number) => void;
    incrementProductInCard?: (id: number) => void;
}

export const CartContext = createContext<ICartContext>({
    cart: [],
});
