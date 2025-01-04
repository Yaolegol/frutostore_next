'use client';

import { Filters } from '@/modules/Filters/components/Filters';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { SidebarContent } from '@/modules/Sidebar/components/SidebarContent';
import { SidebarPortal } from '@/modules/Sidebar/components/SidebarPortal';
import { SIDEBAR_FILTERS_CONTENT_NAME } from '@/modules/pages/Catalog/constants';
import { FC } from 'react';
import style from './index.module.scss';

export const MobileFilters: FC = () => {
    return (
        <SidebarPortal name={SIDEBAR_FILTERS_CONTENT_NAME}>
            <SidebarContent>
                <div className={style.index}>
                    <IntlMessage id="filters.title" />
                    <div className={style.content}>
                        <Filters />
                    </div>
                </div>
            </SidebarContent>
        </SidebarPortal>
    );
};
