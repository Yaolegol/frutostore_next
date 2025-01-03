import { CART_LOCAL_STORAGE_KEY } from '@/modules/Cart/constants';
import { TCart } from '@/modules/Cart/types';

export class CartService {
    private constructor() {}
    private static instance: CartService;

    getCart = (): TCart => {
        const cartString = localStorage.getItem(CART_LOCAL_STORAGE_KEY);

        if (!cartString) {
            return [];
        }

        return JSON.parse(cartString);
    };

    private updateCart = (cart: TCart) => {
        localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
    };

    static getInstance = () => {
        if (!CartService.instance) {
            CartService.instance = new CartService();
        }

        return CartService.instance;
    };

    addProductToCart = (id: number) => {
        try {
            const cart = this.getCart();
            const isExists = cart.some((cartItem) => cartItem.id === id);

            if (!isExists) {
                cart.push({
                    id,
                    quantity: 1,
                });

                this.updateCart(cart);
            }

            return cart;
        } catch (e) {
            console.error(e);
        }

        return [];
    };

    clearCart = () => {
        try {
            this.updateCart([]);
        } catch (e) {
            console.error(e);
        }
    };

    decrementProductInCart = (id: number) => {
        try {
            let cart = this.getCart();
            const product = cart.find((cartItem) => cartItem.id === id);

            if (product) {
                const quantity = product.quantity - 1;

                if (quantity <= 0) {
                    cart = cart.filter((cartItem) => cartItem.id !== id);
                } else {
                    product.quantity = quantity;
                }
            }

            this.updateCart(cart);

            return cart;
        } catch (e) {
            console.error(e);
        }

        return [];
    };

    incrementProductInCart = (id: number) => {
        try {
            const cart = this.getCart();
            const product = cart.find((cartItem) => cartItem.id === id);

            if (product) {
                product.quantity += 1;
            } else {
                cart.push({
                    id,
                    quantity: 1,
                });
            }

            this.updateCart(cart);

            return cart;
        } catch (e) {
            console.error(e);
        }

        return [];
    };
}
