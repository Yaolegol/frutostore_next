'use client';

import { SidebarContext } from '@/modules/Sidebar/context';
import { FC, ReactNode, useMemo, useState } from 'react';

interface IProps {
    children: ReactNode;
}

export const SidebarProvider: FC<IProps> = ({ children }) => {
    const [isSidebarShow, setSidebarIsShow] = useState(false);
    const [sidebarContent, setSidebarContent] = useState<ReactNode>();

    const value = useMemo(() => {
        return {
            isSidebarShow,
            setSidebarContent,
            setSidebarIsShow,
            sidebarContent,
        };
    }, [isSidebarShow, sidebarContent]);

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};
