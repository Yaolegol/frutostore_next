'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { CheckoutModal } from '@/modules/pages/Cart/components/CheckoutModal';
import { Content } from '@/modules/pages/Cart/components/Content';
import { Empty } from '@/modules/pages/Cart/components/Empty';
import { CartPageContext } from '@/modules/pages/Cart/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const Cart: FC = () => {
    const { productsInCart } = useContext(CartPageContext);

    return (
        <div className={style.index}>
            <h1>
                <IntlMessage id="cart.title" />
            </h1>
            <div className={style.content}>
                {productsInCart.length ? <Content /> : <Empty />}
            </div>
            <CheckoutModal />
        </div>
    );
};
