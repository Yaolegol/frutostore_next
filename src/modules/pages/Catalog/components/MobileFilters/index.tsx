import { Filters } from '@/modules/Filters/components/Filters';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { SidebarContent } from '@/modules/Sidebar/components/SidebarContent';
import { FC } from 'react';
import style from './index.module.scss';

export const MobileFilters: FC = () => {
    return (
        <SidebarContent>
            <div className={style.index}>
                <IntlMessage id="filters.title" />
                <div className={style.content}>
                    <Filters />
                </div>
            </div>
        </SidebarContent>
    );
};
