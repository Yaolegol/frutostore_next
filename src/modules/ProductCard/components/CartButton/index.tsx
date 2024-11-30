import { Icon } from '@/components/Icon';
import { FC } from 'react';
import style from './index.module.scss';

export const CartButton: FC = () => {
    return (
        <button className={style.index} type="button">
            <Icon name="cart" />
        </button>
    );
};
