'use client';

import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, ReactNode, useMemo, useState } from 'react';

interface IProps {
    children: ReactNode;
}

export const SidebarProvider: FC<IProps> = ({ children }) => {
    const [sidebarContentName, setSidebarContentName] = useState('');
    const [isSidebarShow, setSidebarIsShow] = useState(false);

    const value = useMemo(() => {
        return {
            isSidebarShow,
            setSidebarContentName,
            setSidebarIsShow,
            sidebarContentName,
        };
    }, [isSidebarShow, sidebarContentName]);

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};
