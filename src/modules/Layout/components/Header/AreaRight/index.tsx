import { FC } from 'react';
import style from './index.module.scss';
import { Icon } from '@/components/Icon';

export const AreaRight: FC = () => {
    return (
        <div className={style.index}>
            <Icon className={style.profileIcon} name="profile" />
            <Icon className={style.cartIcon} name="cart" />
        </div>
    );
};
