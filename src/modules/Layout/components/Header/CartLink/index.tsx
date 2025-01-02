'use client';

import { Icon } from '@/components/Icon';
import { styles } from '@/helpers/styles';
import { CartContext } from '@/modules/Cart/context';
import Link from 'next/link';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const CartLink: FC = () => {
    const { cart } = useContext(CartContext);

    const count = cart.length;

    return (
        <Link
            className={styles(style.index, count === 0 ? style.hidden : '')}
            href="/cart"
        >
            <Icon className={style.cartIcon} name="cart" />
            <div className={style.counter}>{cart.length}</div>
        </Link>
    );
};
