import { FC, ReactNode } from 'react';
import style from './index.module.scss';

interface IProps {
    children: ReactNode;
}

export const Button: FC<IProps> = ({ children }) => {
    return (
        <button className={style.index} type="button">
            {children}
        </button>
    );
};
