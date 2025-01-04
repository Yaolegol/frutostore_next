'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { NavLink } from '@/modules/Layout/components/Header/NavLink';
import { SidebarContext } from '@/modules/Sidebar/context';
import { ROUTE_HOME, ROUTE_CATALOG, ROUTE_CART } from '@/routing';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const NavMobile: FC = () => {
    const { setSidebarIsShow } = useContext(SidebarContext);

    const handleClick = () => {
        setSidebarIsShow?.(false);
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
