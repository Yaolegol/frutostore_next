'use client';

import { MODAL_NAMES } from '@/modules/Modal/constants';
import { createContext } from 'react';

export interface IModalContext {
    modalHide?: (name: MODAL_NAMES) => void;
    modalShow?: (name: MODAL_NAMES) => void;
    showingModals: MODAL_NAMES[];
}

export const ModalContext = createContext<IModalContext>({
    showingModals: [],
});
