import { Counter } from '@/modules/ProductCard/components/Counter';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    id: string;
}

export const BuyBlock: FC<IProps> = ({ id }) => {
    return (
        <div className={style.index}>
            <Counter />
        </div>
    );
};
