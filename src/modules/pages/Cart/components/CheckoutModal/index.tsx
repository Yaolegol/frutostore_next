'use client';

import { CartService } from '@/modules/Cart/services';
import { Modal } from '@/modules/Modal/components/Modal';
import { ModalContent } from '@/modules/Modal/components/ModalContent';
import { MODAL_NAMES } from '@/modules/Modal/constants';
import { ROUTE_HOME } from '@/routing';
import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import style from './index.module.scss';

const { CHECKOUT_SUCCESS } = MODAL_NAMES;

const cartService = CartService.getInstance();

export const CheckoutModal: FC = () => {
    const router = useRouter();

    const handleClose = useCallback(() => {
        cartService.clearCart();
        router.push(ROUTE_HOME);
    }, [router]);

    return (
        <Modal name={CHECKOUT_SUCCESS} onClose={handleClose}>
            <ModalContent name={CHECKOUT_SUCCESS} onClose={handleClose}>
                <div className={style.index}>
                    <div className={style.title}>Спасибо за покупку!</div>
                    <div className={style.description}>
                        В течении 5 минут мы Вам перезвоним
                        <br />
                        для уточнения деталей заказа!
                    </div>
                </div>
            </ModalContent>
        </Modal>
    );
};
