import { ProductList } from '@/modules/Catalog/components/ProductList';
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
                </div>
            </div>
        </div>
    );
};
