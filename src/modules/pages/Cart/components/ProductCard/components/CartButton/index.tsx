import { Icon } from '@/components/Icon';
import { CartContext } from '@/modules/Cart/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

interface IProps {
    id: number;
}

export const CartButton: FC<IProps> = ({ id }) => {
    const { addProductToCart } = useContext(CartContext);

    const handleClick = () => {
        addProductToCart?.(id);
    };

    return (
        <button className={style.index} onClick={handleClick} type="button">
            <Icon name="cart" />
        </button>
    );
};
