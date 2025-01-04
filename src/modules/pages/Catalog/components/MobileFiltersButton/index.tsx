'use client';

import { Icon } from '@/components/Icon';
import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const MobileFiltersButton: FC = () => {
    const { sidebarShow } = useContext(SidebarContext);

    const handleClick = () => {
        sidebarShow?.(SIDEBAR_NAMES.CATALOG_FILTERS);
    };

    return (
        <button className={style.index} onClick={handleClick} type="button">
            <Icon className={style.icon} name="filters" />
        </button>
    );
};
