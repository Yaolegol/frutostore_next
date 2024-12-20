'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { ProductCard } from '@/modules/ProductCard';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const ProductList: FC = () => {
    const { products } = useContext(CatalogContext);

    return (
        <div className={style.index}>
            {products.map(({ description, id, image, price, title }) => {
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
