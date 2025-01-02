'use client';

import { styles } from '@/helpers/styles';
import { CartContext } from '@/modules/Cart/context';
import { FC, useContext, useMemo } from 'react';
import style from './index.module.scss';

interface IProps {
    id: number;
}

export const Counter: FC<IProps> = ({ id }) => {
    const { cart } = useContext(CartContext);
    const { decrementProductInCard, incrementProductInCard } =
        useContext(CartContext);

    const value = useMemo(() => {
        const product = cart.find((item) => item.id === id);

        if (!product) {
            return '1';
        }

        return String(product.quantity);
    }, [cart, id]);

    const handleDecrement = () => {
        decrementProductInCard?.(id);
    };

    const handleIncrement = () => {
        incrementProductInCard?.(id);
    };

    return (
        <div className={style.index}>
            <button
                className={styles(style.button, style.buttonLeft)}
                onClick={handleDecrement}
                type="button"
            >
                -
            </button>
            <input className={style.input} type="text" value={value} />
            <button
                className={styles(style.button, style.buttonRight)}
                onClick={handleIncrement}
                type="button"
            >
                +
            </button>
        </div>
    );
};
