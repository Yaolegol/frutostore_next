import Link from 'next/link';
import { FC, ReactNode } from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
    href: string;
}

export const LinkButton: FC<IProps> = ({ children, href }) => {
    return (
        <Link className={style.index} href={href}>
            {children}
        </Link>
    );
};
