'use client';

import { SIDEBAR_NAMES } from '@/modules/Sidebar/constants';
import { createContext } from 'react';

export interface ISidebarContext {
    showingSidebars: SIDEBAR_NAMES[];
    sidebarHide?: (name: SIDEBAR_NAMES) => void;
    sidebarShow?: (name: SIDEBAR_NAMES) => void;
}

export const SidebarContext = createContext<ISidebarContext>({
    showingSidebars: [],
});
