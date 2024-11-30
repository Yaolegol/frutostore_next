import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    description: string;
    image: string;
    price: number;
    title: string;
}

export const ProductCard: FC<IProps> = ({ description, image, title }) => {
    return (
        <div className={style.index}>
            <img alt={title} className={style.image} src={image} />
            <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div className={style.description}>{description}</div>
            </div>
        </div>
    );
};
