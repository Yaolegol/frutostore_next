import { FC, ReactNode } from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
    return (
        <body className={style.index}>
            <header className={style.header}></header>
            <div className={style.content}>{children}</div>
            <footer className={style.footer}></footer>
        </body>
    );
};
