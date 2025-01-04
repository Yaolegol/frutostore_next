'use client';

import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

interface IProps {
    children: ReactNode;
}

export const SidebarProvider: FC<IProps> = ({ children }) => {
    const [showingSidebars, setShowingSidebars] = useState<SIDEBAR_NAMES[]>([]);

    const sidebarHide = useCallback(
        (name: SIDEBAR_NAMES) => {
            setShowingSidebars(
                showingSidebars.filter((sidebarName) => sidebarName !== name),
            );
        },
        [showingSidebars],
    );

    const sidebarShow = useCallback(
        (name: SIDEBAR_NAMES) => {
            setShowingSidebars([...showingSidebars, name]);
        },
        [showingSidebars],
    );

    const value = useMemo(() => {
        return {
            showingSidebars,
            sidebarHide,
            sidebarShow,
        };
    }, [showingSidebars, sidebarHide, sidebarShow]);

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};
