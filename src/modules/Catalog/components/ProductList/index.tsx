import { ICatalogProduct } from '@/modules/Catalog/types';
import { ProductCard } from '@/modules/ProductCard';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    list: ICatalogProduct[];
}

export const ProductList: FC<IProps> = ({ list }) => {
    return (
        <div className={style.index}>
            {list.map(({ description, id, image, price, title }) => {
                return (
                    <div key={id}>
                        <ProductCard
                            description={description}
                            id={id}
                            image={image}
                            price={price}
                            title={title}
                        />
                    </div>
                );
            })}
        </div>
    );
};
