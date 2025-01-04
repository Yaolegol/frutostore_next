'use client';

import { ProductList } from '@/modules/pages/Cart/components/ProductList';
import { SubmitArea } from '@/modules/pages/Cart/components/SubmitArea';
import { FC } from 'react';
import style from './index.module.scss';

export const Content: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.products}>
                <ProductList />
            </div>
            <div className={style.submit}>
                <SubmitArea />
            </div>
        </div>
    );
};
