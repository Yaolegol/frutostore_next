'use client';

import { ProductCard } from '@/modules/Cart/components/ProductCard';
import { CartPageContext } from '@/modules/Cart/context/CartPageContext';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const ProductList: FC = () => {
    const { productsInCart } = useContext(CartPageContext);

    return (
        <div className={style.index}>
            {productsInCart.map(({ id, image, price, translations }) => {
                const { description, title } = translations[0];

                return (
                    <div key={id}>
                        <ProductCard
                            description={description}
                            id={id}
                            image={image}
                            price={price}
                            title={title}
                        />
                    </div>
                );
            })}
        </div>
    );
};
