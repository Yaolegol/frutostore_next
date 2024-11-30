import { productsList } from '@/modules/Catalog/mock/products';
import { ProductCard } from '@/modules/ProductCard';
import { FC } from 'react';
import style from './index.module.scss';

export const ProductList: FC = () => {
    return (
        <div className={style.index}>
            {productsList.map(({ description, image, price, title }) => {
                return (
                    <div key={title}>
                        <ProductCard
                            description={description}
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
