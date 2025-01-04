'use client';

import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const Burger: FC = () => {
    const { sidebarShow } = useContext(SidebarContext);

    const handleClick = () => {
        sidebarShow?.(SIDEBAR_NAMES.MENU);
    };

    return (
        <button className={style.index} onClick={handleClick} type="button">
            <div className={style.line} />
            <div className={style.line} />
            <div className={style.line} />
        </button>
    );
};
