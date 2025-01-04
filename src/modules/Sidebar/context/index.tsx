'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

export interface ISidebarContext {
    isSidebarShow: boolean;
    setSidebarContentName?: Dispatch<SetStateAction<string>>;
    setSidebarIsShow?: Dispatch<SetStateAction<boolean>>;
    sidebarContentName?: string;
}

export const SidebarContext = createContext<ISidebarContext>({
    isSidebarShow: false,
});
