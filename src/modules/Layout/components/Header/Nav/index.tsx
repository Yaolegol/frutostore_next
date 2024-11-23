import Link from 'next/link';
import { FC } from 'react';
import style from './index.module.scss';

export const Nav: FC = () => {
    return (
        <nav className={style.index}>
            <Link className={style.item} href="/">
                Главная
            </Link>
            <Link className={style.item} href="/catalog">
                Каталог
            </Link>
            <Link className={style.item} href="/cart">
                Корзина
            </Link>
        </nav>
    );
};
