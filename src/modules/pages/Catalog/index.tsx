'use client';

import { Filters } from '@/modules/Filters/components/Filters';
import { Pagination } from '@/modules/pages/Catalog/components/Pagination';
import { ProductList } from '@/modules/pages/Catalog/components/ProductList';
import { ShowMoreButton } from '@/modules/pages/Catalog/components/ShowMoreButton';
import { SortSelect } from '@/modules/Sort/components/SortSelect';
import { FC } from 'react';
import style from './index.module.scss';

export const Catalog: FC = () => {
    return (
        <div className={style.index}>
            <h1>Каталог</h1>
            <div className={style.content}>
                <div className={style.filters}>
                    <Filters />
                </div>
                <div>
                    <div className={style.sortContainer}>
                        <SortSelect />
                    </div>
                    <div className={style.productsContainer}>
                        <ProductList />
                    </div>
                    <div>
                        <Pagination />
                    </div>
                    <div className={style.showMoreButton}>
                        <ShowMoreButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
