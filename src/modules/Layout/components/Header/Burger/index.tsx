'use client';

import { MobileMenu } from '@/modules/Layout/components/Header/MobileMenu';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const Burger: FC = () => {
    const { setSidebarContent, setSidebarIsShow } = useContext(SidebarContext);

    const onClick = () => {
        setSidebarContent?.(<MobileMenu />);
        setSidebarIsShow?.(true);
    };

    return (
        <button className={style.index} onClick={onClick} type="button">
            <div className={style.line} />
            <div className={style.line} />
            <div className={style.line} />
        </button>
    );
};
