import { ROUTE_HOME } from '@/routing';
import Link from 'next/link';
import { FC } from 'react';
import style from './index.module.scss';

export const Logo: FC = () => {
    return (
        <Link className={style.index} href={ROUTE_HOME}>
            <img alt="logo" className={style.image} src="/images/logo.svg" />
            <div className={style.title}>Frutostore</div>
        </Link>
    );
};
