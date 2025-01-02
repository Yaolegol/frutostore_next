import { CartLink } from '@/modules/Layout/components/Header/CartLink';
import { FC } from 'react';
import style from './index.module.scss';

export const AreaRight: FC = () => {
    return (
        <div className={style.index}>
            <CartLink />
        </div>
    );
};
