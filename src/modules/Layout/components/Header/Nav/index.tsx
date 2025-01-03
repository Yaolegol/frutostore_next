'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { NavLink } from '@/modules/Layout/components/Header/NavLink';
import { ROUTE_HOME, ROUTE_CATALOG, ROUTE_CART } from '@/routing';
import { FC } from 'react';
import style from './index.module.scss';

export const Nav: FC = () => {
    return (
        <nav className={style.index}>
            <NavLink href={ROUTE_HOME}>
                <IntlMessage id="header.links.home" />
            </NavLink>
            <NavLink href={ROUTE_CATALOG}>
                <IntlMessage id="header.links.catalog" />
            </NavLink>
            <NavLink href={ROUTE_CART}>
                <IntlMessage id="header.links.cart" />
            </NavLink>
        </nav>
    );
};
