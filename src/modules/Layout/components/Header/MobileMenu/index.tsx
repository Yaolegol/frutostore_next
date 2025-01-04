import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { NavMobile } from '@/modules/Layout/components/Header/NavMobile';
import { Sidebar } from '@/modules/Sidebar/components/Sidebar';
import { SidebarContent } from '@/modules/Sidebar/components/SidebarContent';
import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { FC } from 'react';
import style from './index.module.scss';

const { MENU } = SIDEBAR_NAMES;

export const MobileMenu: FC = () => {
    return (
        <Sidebar name={MENU}>
            <SidebarContent name={MENU}>
                <div className={style.index}>
                    <NavMobile />
                    <div className={style.langContainer}>
                        <SelectLang />
                    </div>
                </div>
            </SidebarContent>
        </Sidebar>
    );
};
