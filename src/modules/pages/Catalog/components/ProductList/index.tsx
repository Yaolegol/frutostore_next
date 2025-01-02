'use client';

import { ProductCard } from '@/modules/pages/Catalog/components/ProductCard';
import { CatalogContext } from '@/modules/pages/Catalog/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const ProductList: FC = () => {
    const { products } = useContext(CatalogContext);

    return (
        <div className={style.index}>
            {products.map(({ id, image, price, translations }) => {
                const { description, title } = translations[0];

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
