import { ProductList } from '@/modules/Catalog/components/ProductList';
import { ICatalogProduct } from '@/modules/Catalog/types';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    list: ICatalogProduct[];
}

export const Catalog: FC<IProps> = ({ list }) => {
    return (
        <div className={style.index}>
            <h1>Каталог</h1>
            <div className={style.content}>
                <div></div>
                <div>
                    <ProductList list={list} />
                </div>
            </div>
        </div>
    );
};
