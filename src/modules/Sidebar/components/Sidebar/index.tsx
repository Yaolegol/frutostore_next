'use client';

import { styles } from '@/helpers/styles';
import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import {
    FC,
    MouseEvent,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import style from './index.module.scss';
import { usePathname } from 'next/navigation';

interface IProps {
    children: ReactNode;
    name: SIDEBAR_NAMES;
    onClose?: () => void;
}

export const Sidebar: FC<IProps> = ({ children, name, onClose }) => {
    const pathname = usePathname();
    const ref = useRef<HTMLDivElement>(null);
    const [currentPathname, setCurrentPathname] = useState(pathname);
    const [isClientRender, setIsClientRender] = useState(false);
    const { sidebarHide, showingSidebars } = useContext(SidebarContext);

    const handleClose = useCallback(() => {
        onClose?.();
        sidebarHide?.(name);
    }, [name, onClose, sidebarHide]);

    const handleBackDropClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (ref.current?.contains(e.target as Node)) {
                return;
            }

            handleClose();
        },
        [handleClose],
    );

    useEffect(() => {
        if (currentPathname === pathname) {
            return;
        }

        setCurrentPathname(pathname);
        handleClose();
    }, [currentPathname, handleBackDropClick, handleClose, pathname]);

    useEffect(() => {
        setIsClientRender(true);
    }, []);

    if (!isClientRender) {
        return null;
    }

    const isShow = showingSidebars.includes(name);

    return (
        <div
            className={styles(style.index, isShow ? style.isShow : '')}
            onClick={handleBackDropClick}
            role="button"
        >
            <div className={style.content} ref={ref}>
                {children}
            </div>
        </div>
    );
};
