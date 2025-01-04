'use client';

import { Filters } from '@/modules/Filters/components/Filters';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { MobileFilters } from '@/modules/pages/Catalog/components/MobileFilters';
import { MobileFiltersButton } from '@/modules/pages/Catalog/components/MobileFiltersButton';
import { Pagination } from '@/modules/pages/Catalog/components/Pagination';
import { ProductList } from '@/modules/pages/Catalog/components/ProductList';
import { ShowMoreButton } from '@/modules/pages/Catalog/components/ShowMoreButton';
import { SortSelectController } from '@/modules/Sort/controllers/SortSelectController';
import { FC } from 'react';
import style from './index.module.scss';

export const Catalog: FC = () => {
    return (
        <div className={style.index}>
            <h1>
                <IntlMessage id="catalog.title" />
            </h1>
            <div className={style.content}>
                <div className={style.filters}>
                    <Filters />
                </div>
                <div>
                    <div className={style.sortContainer}>
                        <div className={style.mobile}>
                            <MobileFiltersButton />
                        </div>

                        <SortSelectController />
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
            <MobileFilters />
        </div>
    );
};
