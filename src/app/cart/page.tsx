import { Cart } from '@/modules/pages/Cart';
import { CartPageProvider } from '@/modules/pages/Cart/provider';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store',
};

const CartPage: NextPage = async () => {
    return (
        <CartPageProvider>
            <Cart />
        </CartPageProvider>
    );
};

export default CartPage;
