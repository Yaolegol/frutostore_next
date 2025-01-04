import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { NavMobile } from '@/modules/Layout/components/Header/NavMobile';
import { SIDEBAR_MENU_CONTENT_NAME } from '@/modules/Layout/constants';
import { SidebarContent } from '@/modules/Sidebar/components/SidebarContent';
import { SidebarPortal } from '@/modules/Sidebar/components/SidebarPortal';
import { FC } from 'react';
import style from './index.module.scss';

export const MobileMenu: FC = () => {
    return (
        <SidebarPortal name={SIDEBAR_MENU_CONTENT_NAME}>
            <SidebarContent>
                <div className={style.index}>
                    <NavMobile />
                    <div className={style.langContainer}>
                        <SelectLang />
                    </div>
                </div>
            </SidebarContent>
        </SidebarPortal>
    );
};
