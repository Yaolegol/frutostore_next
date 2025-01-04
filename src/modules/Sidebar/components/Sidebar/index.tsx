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

interface IProps {
    children: ReactNode;
    name: SIDEBAR_NAMES;
}

export const Sidebar: FC<IProps> = ({ children, name }) => {
    const [isClientRender, setIsClientRender] = useState(false);
    const { sidebarHide, showingSidebars } = useContext(SidebarContext);
    const ref = useRef<HTMLDivElement>(null);

    const handleBackDropClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (ref.current?.contains(e.target as Node)) {
                return;
            }

            sidebarHide?.(name);
        },
        [name, sidebarHide],
    );

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
