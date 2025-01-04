import { Logo } from '@/components/Logo';
import { FC } from 'react';
import style from './index.module.scss';

export const Mobile: FC = () => {
    return (
        <div className={style.index}>
            <Logo />
        </div>
    );
};
