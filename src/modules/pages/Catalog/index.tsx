'use client';

import { RangeFilterController } from '@/modules/Filters/controllers/RangeFilterController';
import { Pagination } from '@/modules/pages/Catalog/components/Pagination';
import { ProductList } from '@/modules/pages/Catalog/components/ProductList';
import { ShowMoreButton } from '@/modules/pages/Catalog/components/ShowMoreButton';
import { FC } from 'react';
import style from './index.module.scss';

export const Catalog: FC = () => {
    return (
        <div className={style.index}>
            <h1>Каталог</h1>
            <div className={style.content}>
                <div className={style.filters}>
                    <RangeFilterController />
                </div>
                <div>
                    <ProductList />
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
