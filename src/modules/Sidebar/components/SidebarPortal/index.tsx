'use client';

import { SIDEBAR_CONTENT_ID } from '@/modules/Sidebar/constants';
import { SidebarContext } from '@/modules/Sidebar/context';
import { createPortal } from 'react-dom';
import { FC, ReactNode, useContext } from 'react';

interface IProps {
    children: ReactNode;
    name: string;
}

export const SidebarPortal: FC<IProps> = ({ children, name }) => {
    const { sidebarContentName } = useContext(SidebarContext);
    const element = document.getElementById(SIDEBAR_CONTENT_ID);

    if (!element || sidebarContentName !== name) {
        return null;
    }

    return createPortal(children, element);
};
