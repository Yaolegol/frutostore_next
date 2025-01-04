'use client';

import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

export interface ISidebarContext {
    isSidebarShow: boolean;
    setSidebarContent?: Dispatch<SetStateAction<ReactNode>>;
    setSidebarIsShow?: Dispatch<SetStateAction<boolean>>;
    sidebarContent?: ReactNode;
}

export const SidebarContext = createContext<ISidebarContext>({
    isSidebarShow: false,
});
