import { ROUTE_HOME, ROUTE_CATALOG, ROUTE_CART } from '@/routing';
import Link from 'next/link';
import { FC } from 'react';
import style from './index.module.scss';

export const Nav: FC = () => {
    return (
        <nav className={style.index}>
            <Link className={style.item} href={ROUTE_HOME}>
                Главная
            </Link>
            <Link className={style.item} href={ROUTE_CATALOG}>
                Каталог
            </Link>
            <Link className={style.item} href={ROUTE_CART}>
                Корзина
            </Link>
        </nav>
    );
};
