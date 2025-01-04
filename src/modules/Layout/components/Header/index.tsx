import { Desktop } from '@/modules/Layout/components/Header/Desktop';
import { Mobile } from '@/modules/Layout/components/Header/Mobile';
import { FC } from 'react';
import style from './index.module.scss';

export const Header: FC = () => {
    return (
        <header className={style.index}>
            <div className={style.desktop}>
                <Desktop />
            </div>
            <div className={style.mobile}>
                <Mobile />
            </div>
        </header>
    );
};
