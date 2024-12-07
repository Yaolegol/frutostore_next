import { CartButton } from '@/modules/ProductCard/components/CartButton';
import { Counter } from '@/modules/ProductCard/components/Counter';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    id: number;
}

export const BuyBlock: FC<IProps> = ({ id }) => {
    const isShowCounter = false;

    return (
        <div className={style.index}>
            {isShowCounter ? <Counter /> : <CartButton />}
        </div>
    );
};
