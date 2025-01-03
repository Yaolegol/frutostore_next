'use client';

import { styles } from '@/helpers/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
    href: string;
}

export const NavLink: FC<IProps> = ({ children, href }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            className={styles(style.index, isActive ? style.active : '')}
            href={href}
        >
            {children}
        </Link>
    );
};
