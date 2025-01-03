'use client';

import { Content } from '@/modules/pages/Cart/components/Content';
import { CartPageContext } from '@/modules/pages/Cart/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';
import { Empty } from '@/modules/pages/Cart/components/Empty';

export const Cart: FC = () => {
    const { productsInCart } = useContext(CartPageContext);

    return (
        <div className={style.index}>
            <h1>Корзина</h1>
            <div className={style.content}>
                {productsInCart.length ? <Content /> : <Empty />}
            </div>
        </div>
    );
};
