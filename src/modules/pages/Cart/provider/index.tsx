'use client';

import { CartContext } from '@/modules/Cart/context';
import { CartPageContext } from '@/modules/pages/Cart/context';
import { CatalogService } from '@/modules/pages/Catalog/service';
import { ICatalogProduct } from '@/modules/pages/Catalog/types';
import {
    FC,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

interface IProps {
    children: ReactNode;
}

const catalogService = new CatalogService();

export const CartPageProvider: FC<IProps> = ({ children }) => {
    const [products, setProducts] = useState<ICatalogProduct[]>([]);
    const { cart } = useContext(CartContext);

    const getProducts = useCallback(async () => {
        const data = await catalogService.getProducts({
            perPage: '50',
        });

        setProducts(data?.data ?? []);
    }, []);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

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
