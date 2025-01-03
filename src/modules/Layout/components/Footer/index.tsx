import { Copyright } from '@/components/Copyright';
import { Logo } from '@/components/Logo';
import { FC } from 'react';
import style from './index.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={style.index}>
            <div className={style.container}>
                <Logo />
                <Copyright />
            </div>
        </footer>
    );
};
