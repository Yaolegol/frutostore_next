import { Logo } from '@/components/Logo';
import { FC } from 'react';
import style from './index.module.scss';

export const AreaLeft: FC = () => {
    return (
        <div className={style.index}>
            <Logo />
        </div>
    );
};
