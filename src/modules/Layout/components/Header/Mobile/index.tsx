import { Logo } from '@/components/Logo';
import { Burger } from '@/modules/Layout/components/Header/Burger';
import { FC } from 'react';
import style from './index.module.scss';

export const Mobile: FC = () => {
    return (
        <div className={style.index}>
            <Logo />
            <Burger />
        </div>
    );
};
