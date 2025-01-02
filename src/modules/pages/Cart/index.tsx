import { ProductList } from '@/modules/pages/Cart/components/ProductList';
import { SubmitArea } from '@/modules/pages/Cart/components/SubmitArea';
import { FC } from 'react';
import style from './index.module.scss';

export const Cart: FC = () => {
    return (
        <div className={style.index}>
            <h1>Корзина</h1>
            <div className={style.content}>
                <div className={style.products}>
                    <ProductList />
                </div>
                <div className={style.submit}>
                    <SubmitArea />
                </div>
            </div>
        </div>
    );
};
