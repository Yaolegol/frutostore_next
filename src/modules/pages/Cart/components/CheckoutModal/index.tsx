'use client';

import { CartContext } from '@/modules/Cart/context';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { Modal } from '@/modules/Modal/components/Modal';
import { ModalContent } from '@/modules/Modal/components/ModalContent';
import { MODAL_NAMES } from '@/modules/Modal/constants';
import { ROUTE_HOME } from '@/routing';
import { useRouter } from 'next/navigation';
import { FC, useCallback, useContext } from 'react';
import style from './index.module.scss';

const { CHECKOUT_SUCCESS } = MODAL_NAMES;

export const CheckoutModal: FC = () => {
    const { clearCard } = useContext(CartContext);
    const router = useRouter();

    const handleClose = useCallback(() => {
        clearCard?.();
        router.push(ROUTE_HOME);
    }, [clearCard, router]);

    return (
        <Modal name={CHECKOUT_SUCCESS} onClose={handleClose}>
            <ModalContent name={CHECKOUT_SUCCESS} onClose={handleClose}>
                <div className={style.index}>
                    <div className={style.title}>
                        <IntlMessage id="order.thanksForOrder.title" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="order.thanksForOrder.description1" />
                        <br />
                        <IntlMessage id="order.thanksForOrder.description2" />
                    </div>
                </div>
            </ModalContent>
        </Modal>
    );
};
