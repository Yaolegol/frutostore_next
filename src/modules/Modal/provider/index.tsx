'use client';

import { ModalContext } from '@/modules/Modal/context';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import { MODAL_NAMES } from '@/modules/Modal/constants';

interface IProps {
    children: ReactNode;
}

export const ModalProvider: FC<IProps> = ({ children }) => {
    const [showingModals, setShowingModals] = useState<MODAL_NAMES[]>([]);

    const modalHide = useCallback(
        (name: MODAL_NAMES) => {
            setShowingModals(
                showingModals.filter((modalName) => modalName !== name),
            );
        },
        [showingModals],
    );

    const modalShow = useCallback(
        (name: MODAL_NAMES) => {
            setShowingModals([...showingModals, name]);
        },
        [showingModals],
    );

    const value = useMemo(() => {
        return {
            modalHide,
            modalShow,
            showingModals,
        };
    }, [modalHide, modalShow, showingModals]);

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};
