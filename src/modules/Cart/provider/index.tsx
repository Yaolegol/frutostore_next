'use client';

import { CartContext } from '@/modules/Cart/context';
import { CartService } from '@/modules/Cart/services';
import { TCart } from '@/modules/Cart/types';
import {
    FC,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

interface IProps {
    children: ReactNode;
}

const cartService = CartService.getInstance();

export const CartProvider: FC<IProps> = ({ children }) => {
    const [cart, setCart] = useState<TCart>([]);

    useEffect(() => {
        try {
            const cartData = cartService.getCart();
            setCart(cartData);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const addProductToCart = useCallback((id: number) => {
        const newCart = cartService.addProductToCart(id);

        setCart(newCart);
    }, []);

    const clearCard = useCallback(() => {
        cartService.clearCart();

        setCart([]);
    }, []);

    const decrementProductInCard = useCallback((id: number) => {
        const newCart = cartService.decrementProductInCart(id);

        setCart(newCart);
    }, []);

    const incrementProductInCard = useCallback((id: number) => {
        const newCart = cartService.incrementProductInCart(id);

        setCart(newCart);
    }, []);

    const value = useMemo(() => {
        return {
            addProductToCart,
            cart,
            clearCard,
            decrementProductInCard,
            incrementProductInCard,
        };
    }, [
        addProductToCart,
        cart,
        clearCard,
        decrementProductInCard,
        incrementProductInCard,
    ]);

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
