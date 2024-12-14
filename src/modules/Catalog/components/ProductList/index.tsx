'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { ProductCard } from '@/modules/ProductCard';
import { FC, useCallback, useContext } from 'react';
import style from './index.module.scss';

export const ProductList: FC = () => {
    const { getNextPage, lastPage, products, page } =
        useContext(CatalogContext);

    const handleClick = useCallback(() => {
        getNextPage?.();
    }, [getNextPage]);

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
            {page && lastPage && page < lastPage ? (
                <button onClick={handleClick} type="button">
                    Показать еще
                </button>
            ) : null}
        </div>
    );
};
