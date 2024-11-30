import { productsList } from '@/modules/Catalog/mock/products';
import { ProductCard } from '@/modules/ProductCard';
import { FC } from 'react';
import style from './index.module.scss';

export const ProductList: FC = () => {
    return (
        <div className={style.index}>
            {productsList.map(({ description, id, image, price, title }) => {
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
