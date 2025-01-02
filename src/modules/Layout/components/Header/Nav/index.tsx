'use client';

import { NavLink } from '@/modules/Layout/components/Header/NavLink';
import { ROUTE_HOME, ROUTE_CATALOG, ROUTE_CART } from '@/routing';
import { FC } from 'react';
import style from './index.module.scss';

export const Nav: FC = () => {
    return (
        <nav className={style.index}>
            <NavLink href={ROUTE_HOME}>Главная</NavLink>
            <NavLink href={ROUTE_CATALOG}>Каталог</NavLink>
            <NavLink href={ROUTE_CART}>Корзина</NavLink>
        </nav>
    );
};
