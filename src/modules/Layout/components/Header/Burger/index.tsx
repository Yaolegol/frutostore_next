'use client';

import { SIDEBAR_MENU_CONTENT_NAME } from '@/modules/Layout/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const Burger: FC = () => {
    const { setSidebarContentName, setSidebarIsShow } =
        useContext(SidebarContext);

    const handleClick = () => {
        setSidebarIsShow?.(true);
        setSidebarContentName?.(SIDEBAR_MENU_CONTENT_NAME);
    };

    return (
        <button className={style.index} onClick={handleClick} type="button">
            <div className={style.line} />
            <div className={style.line} />
            <div className={style.line} />
        </button>
    );
};
