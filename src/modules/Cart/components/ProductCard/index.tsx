import { getPriceFormatted } from '@/helpers/price';
import { BuyBlock } from '@/modules/pages/Catalog/components/ProductCard/components/BuyBlock';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    description: string;
    id: number;
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
