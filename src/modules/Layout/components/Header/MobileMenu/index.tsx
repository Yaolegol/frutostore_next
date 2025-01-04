import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { NavMobile } from '@/modules/Layout/components/Header/NavMobile';
import { SidebarContent } from '@/modules/Sidebar/components/SidebarContent';
import { FC } from 'react';
import style from './index.module.scss';

export const MobileMenu: FC = () => {
    return (
        <SidebarContent>
            <div className={style.index}>
                <NavMobile />
                <div className={style.langContainer}>
                    <SelectLang />
                </div>
            </div>
        </SidebarContent>
    );
};
