'use client';

import { Icon } from '@/components/Icon';
import { MobileFilters } from '@/modules/pages/Catalog/components/MobileFilters';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const MobileFiltersButton: FC = () => {
    const { setSidebarContent, setSidebarIsShow } = useContext(SidebarContext);

    const handleClick = () => {
        setSidebarContent?.(<MobileFilters />);
        setSidebarIsShow?.(true);
    };

    return (
        <button className={style.index} onClick={handleClick} type="button">
            <Icon className={style.icon} name="filters" />
        </button>
    );
};
