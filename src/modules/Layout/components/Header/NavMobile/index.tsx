'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { NavLink } from '@/modules/Layout/components/Header/NavLink';
import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { ROUTE_CART, ROUTE_CATALOG, ROUTE_HOME } from '@/routing';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const NavMobile: FC = () => {
    const { sidebarHide } = useContext(SidebarContext);

    const handleClick = () => {
        sidebarHide?.(SIDEBAR_NAMES.MENU);
    };

    return (
        <nav className={style.index}>
            <NavLink href={ROUTE_HOME} onClick={handleClick}>
                <IntlMessage id="header.links.home" />
            </NavLink>
            <NavLink href={ROUTE_CATALOG} onClick={handleClick}>
                <IntlMessage id="header.links.catalog" />
            </NavLink>
            <NavLink href={ROUTE_CART} onClick={handleClick}>
                <IntlMessage id="header.links.cart" />
            </NavLink>
        </nav>
    );
};
