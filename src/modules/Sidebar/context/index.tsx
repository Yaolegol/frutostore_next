'use client';

import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

export interface ISidebarContext {
    isSidebarShow: boolean;
    setSidebarContent?: Dispatch<SetStateAction<ReactNode>>;
    setSidebarContentName?: Dispatch<SetStateAction<string>>;
    setSidebarIsShow?: Dispatch<SetStateAction<boolean>>;
    sidebarContentName?: string;
}

export const SidebarContext = createContext<ISidebarContext>({
    isSidebarShow: false,
});
