import { FC } from 'react';
import style from './index.module.scss';

export const Photo: FC = () => {
    return (
        <img
            alt="Oleg Oleinik"
            className={style.index}
            src="/images/avatar.webp"
        />
    );
};
