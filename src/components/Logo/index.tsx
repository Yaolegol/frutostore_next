import Link from 'next/link';
import { FC } from 'react';
import style from './index.module.scss';

export const Logo: FC = () => {
    return (
        <Link className={style.index} href="/">
            <img alt="logo" className={style.image} src="/images/logo.svg" />
        </Link>
    );
};
