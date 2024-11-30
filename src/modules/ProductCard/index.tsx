import { getPriceFormatted } from '@/helpers/price';
import { FC } from 'react';
import style from './index.module.scss';
import { BuyBlock } from '@/modules/ProductCard/components/BuyBlock';

interface IProps {
    description: string;
    id: string;
    image: string;
    price: number;
    title: string;
}

export const ProductCard: FC<IProps> = ({
    description,
    id,
    image,
    price,
    title,
}) => {
    return (
        <div className={style.index}>
            <img alt={title} className={style.image} src={image} />
            <div className={style.container}>
                <div className={style.titleArea}>
                    <div className={style.title}>{title}</div>
                    <div className={style.description}>{description}</div>
                </div>
                <div className={style.priceArea}>
                    <div className={style.price}>
                        {getPriceFormatted(price)}
                    </div>
                    <div className={style.cart}>
                        <BuyBlock id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
};
