'use client';

import { styles } from '@/helpers/styles';
import { SIDEBAR_CONTENT_ID } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, MouseEvent, useCallback, useContext, useRef } from 'react';
import style from './index.module.scss';

export const Sidebar: FC = () => {
    const { isSidebarShow, setSidebarIsShow } = useContext(SidebarContext);
    const ref = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
        setSidebarIsShow?.(false);
    }, [setSidebarIsShow]);

    const handleBackDropClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (ref.current?.contains(e.target as Node)) {
                return;
            }

            handleClose();
        },
        [handleClose],
    );

    return (
        <div
            className={styles(style.index, isSidebarShow ? style.isShow : '')}
            onClick={handleBackDropClick}
            role="button"
        >
            <div className={style.content} ref={ref}>
                <div id={SIDEBAR_CONTENT_ID} />
            </div>
        </div>
    );
};
