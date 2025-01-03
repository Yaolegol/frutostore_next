'use client';

import { styles } from '@/helpers/styles';
import { MODAL_NAMES } from '@/modules/Modal/constants';
import { ModalContext } from '@/modules/Modal/context';
import {
    FC,
    MouseEvent,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
    name: MODAL_NAMES;
    onClose?: () => void;
}

export const Modal: FC<IProps> = ({ children, name, onClose }) => {
    const [isClientRender, setIsClientRender] = useState(false);
    const { modalHide, showingModals } = useContext(ModalContext);
    const ref = useRef<HTMLDivElement>(null);

    const handleBackDropClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (ref.current?.contains(e.target as Node)) {
                return;
            }

            onClose?.();
            modalHide?.(name);
        },
        [modalHide, name, onClose],
    );

    useEffect(() => {
        setIsClientRender(true);
    }, []);

    if (!isClientRender) {
        return null;
    }

    const isShow = showingModals.includes(name);

    return (
        <div
            className={styles(style.index, isShow ? style.isShow : '')}
            onClick={handleBackDropClick}
            role="button"
        >
            <div className={style.contentArea}>
                <div className={style.content} ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    );
};
