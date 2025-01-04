'use client';

import { Icon } from '@/components/Icon';
import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, ReactNode, useCallback, useContext } from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
    name: SIDEBAR_NAMES;
}

export const SidebarContent: FC<IProps> = ({ children, name }) => {
    const { sidebarHide } = useContext(SidebarContext);

    const handleClick = useCallback(() => {
        sidebarHide?.(name);
    }, [name, sidebarHide]);

    return (
        <div className={style.index}>
            <button
                className={style.closeButton}
                onClick={handleClick}
                type="button"
            >
                <Icon className={style.closeIcon} name="cross" />
            </button>
            {children}
        </div>
    );
};
