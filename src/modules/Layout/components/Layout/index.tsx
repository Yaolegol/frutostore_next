import { Footer } from '@/modules/Layout/components/Footer';
import { Header } from '@/modules/Layout/components/Header';
import { MobileMenu } from '@/modules/Layout/components/Header/MobileMenu';
import { Sidebar } from '@/modules/Sidebar/components/Sidebar';
import { FC, ReactNode } from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
    return (
        <body className={style.index}>
            <Header />
            <div className={style.content}>{children}</div>
            <div className={style.footer}>
                <Footer />
            </div>
            <MobileMenu />
            <Sidebar />
        </body>
    );
};
