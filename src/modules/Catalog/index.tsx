'use client';

import { ProductList } from '@/modules/Catalog/components/ProductList';
import { ShowMoreButton } from '@/modules/Catalog/components/ShowMoreButton';
import { FC } from 'react';
import style from './index.module.scss';

export const Catalog: FC = () => {
    return (
        <div className={style.index}>
            <h1>Каталог</h1>
            <div className={style.content}>
                <div></div>
                <div>
                    <ProductList />
                    <div className={style.showMoreButton}>
                        <ShowMoreButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
