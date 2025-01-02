import { CartContext } from '@/modules/Cart/context';
import { CartButton } from '@/modules/ProductCard/components/CartButton';
import { Counter } from '@/modules/ProductCard/components/Counter';
import { FC, useContext, useMemo } from 'react';
import style from './index.module.scss';

interface IProps {
    id: number;
}

export const BuyBlock: FC<IProps> = ({ id }) => {
    const { cart } = useContext(CartContext);

    const isInCart = useMemo(() => {
        return cart.some((cartItem) => cartItem.id === id);
    }, [cart, id]);

    return (
        <div className={style.index}>
            {isInCart ? <Counter id={id} /> : <CartButton id={id} />}
        </div>
    );
};
