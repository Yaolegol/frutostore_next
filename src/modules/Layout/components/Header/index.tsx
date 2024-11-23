import { Icon } from '@/components/Icon';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { FC } from 'react';
import style from './index.module.scss';

export const Header: FC = () => {
    return (
        <header className={style.index}>
            <div className={style.container}>
                <div className={style.areaLeft}>
                    <Logo />
                </div>
                <nav className={style.nav}>
                    <Link className={style.navItem} href="/">
                        Главная
                    </Link>
                    <Link className={style.navItem} href="/catalog">
                        Каталог
                    </Link>
                    <Link className={style.navItem} href="/cart">
                        Корзина
                    </Link>
                </nav>
                <div className={style.areaRight}>
                    <Icon className={style.profileIcon} name="profile" />
                    <Icon className={style.cartIcon} name="cart" />
                </div>
            </div>
        </header>
    );
};
