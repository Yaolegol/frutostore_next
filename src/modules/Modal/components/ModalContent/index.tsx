import { Icon } from '@/components/Icon';
import { MODAL_NAMES } from '@/modules/Modal/constants';
import { FC, ReactNode, useCallback, useContext } from 'react';
import style from './index.module.scss';
import { ModalContext } from '@/modules/Modal/context';

interface IProps {
    children: ReactNode;
    name: MODAL_NAMES;
    onClose?: () => void;
}

export const ModalContent: FC<IProps> = ({ children, name, onClose }) => {
    const { modalHide } = useContext(ModalContext);

    const handleClick = useCallback(() => {
        onClose?.();
        modalHide?.(name);
    }, [modalHide, name, onClose]);

    return (
        <div className={style.index}>
            <button
                className={style.closeButton}
                onClick={handleClick}
                type="button"
            >
                <Icon className={style.closeIcon} name="cross" />
            </button>
            {children}
        </div>
    );
};
