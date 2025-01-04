'use client';

import { Icon } from '@/components/Icon';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, ReactNode, useCallback, useContext } from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
}

export const SidebarContent: FC<IProps> = ({ children }) => {
    const { setSidebarIsShow } = useContext(SidebarContext);

    const handleClick = useCallback(() => {
        setSidebarIsShow?.(false);
    }, [setSidebarIsShow]);

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
