import { getServerLangData } from '@/helpers/lang/server';
import { LayoutProvider } from '@/modules/Layout/provider';
import { Cart } from '@/modules/pages/Cart';
import { CartPageProvider } from '@/modules/pages/Cart/provider';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store',
};

const CartPage: NextPage = async () => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();

    return (
        <LayoutProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <CartPageProvider>
                <Cart />
            </CartPageProvider>
        </LayoutProvider>
    );
};

export default CartPage;
