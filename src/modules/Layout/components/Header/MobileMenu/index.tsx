import { NavMobile } from '@/modules/Layout/components/Header/NavMobile';
import { Sidebar } from '@/modules/Sidebar/components/Sidebar';
import { SidebarContent } from '@/modules/Sidebar/components/SidebarContent';
import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { FC } from 'react';
import style from './index.module.scss';

export const MobileMenu: FC = () => {
    return (
        <Sidebar name={SIDEBAR_NAMES.MENU}>
            <SidebarContent name={SIDEBAR_NAMES.MENU}>
                <div className={style.index}>
                    <NavMobile />
                </div>
            </SidebarContent>
        </Sidebar>
    );
};
