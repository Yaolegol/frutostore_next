'use client';

import { Icon } from '@/components/Icon';
import { SIDEBAR_FILTERS_CONTENT_NAME } from '@/modules/pages/Catalog/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const MobileFiltersButton: FC = () => {
    const { setSidebarContentName, setSidebarIsShow } =
        useContext(SidebarContext);

    const handleClick = () => {
        setSidebarContentName?.(SIDEBAR_FILTERS_CONTENT_NAME);
        setSidebarIsShow?.(true);
    };

    return (
        <button className={style.index} onClick={handleClick} type="button">
            <Icon className={style.icon} name="filters" />
        </button>
    );
};
