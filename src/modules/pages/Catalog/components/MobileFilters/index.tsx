'use client';

import { Filters } from '@/modules/Filters/components/Filters';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { Sidebar } from '@/modules/Sidebar/components/Sidebar';
import { SidebarContent } from '@/modules/Sidebar/components/SidebarContent';
import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { FC } from 'react';
import style from './index.module.scss';

const { CATALOG_FILTERS } = SIDEBAR_NAMES;

export const MobileFilters: FC = () => {
    return (
        <Sidebar name={CATALOG_FILTERS}>
            <SidebarContent name={CATALOG_FILTERS}>
                <div className={style.index}>
                    <IntlMessage id="filters.title" />
                    <div className={style.content}>
                        <Filters />
                    </div>
                </div>
            </SidebarContent>
        </Sidebar>
    );
};
