import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    alt: string;
    src: string;
}

export const Slide: FC<IProps> = ({ alt, src }) => {
    return (
        <div className={style.index}>
            <img alt={alt} className={style.image} src={src} />
        </div>
    );
};
