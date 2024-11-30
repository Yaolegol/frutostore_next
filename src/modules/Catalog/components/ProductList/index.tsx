import { productsList } from '@/modules/Catalog/mock/products';
import { ProductCard } from '@/modules/ProductCard';
import { FC } from 'react';
import style from './index.module.scss';

export const ProductList: FC = () => {
    return (
        <div className={style.index}>
            {productsList.map(({ title }) => {
                return (
                    <div key={title}>
                        <ProductCard />
                    </div>
                );
            })}
        </div>
    );
};
