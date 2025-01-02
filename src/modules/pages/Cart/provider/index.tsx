'use client';

import { CartContext } from '@/modules/Cart/context';
import { CartPageContext } from '@/modules/pages/Cart/context';
import { ICatalogProduct } from '@/modules/pages/Catalog/types';
import { FC, ReactNode, useContext, useMemo } from 'react';

interface IProps {
    children: ReactNode;
    products: ICatalogProduct[];
}

export const CartPageProvider: FC<IProps> = ({ products, children }) => {
    const { cart } = useContext(CartContext);

    const value = useMemo(() => {
        if (!products.length) {
            return {
                productsInCart: [],
            };
        }

        const productsInCart = products.filter(({ id }) =>
            cart.some((cartItem) => cartItem.id === id),
        );

        return {
            productsInCart,
        };
    }, [cart, products]);

    return (
        <CartPageContext.Provider value={value}>
            {children}
        </CartPageContext.Provider>
    );
};
