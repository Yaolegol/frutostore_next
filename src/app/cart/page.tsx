import { getServerLangData } from '@/helpers/lang/server';
import { CartPageProvider } from '@/modules/Cart/provider/CartPageProvider';
import { LayoutProvider } from '@/modules/Layout/provider';
import { Cart } from '@/modules/pages/Cart';
import { CatalogService } from '@/modules/pages/Catalog/service';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store',
};

const catalogService = new CatalogService();

const CartPage: NextPage = async () => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();
    const data = await catalogService.getProducts({
        perPage: '50',
    });

    return (
        <LayoutProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <CartPageProvider products={data?.data ?? []}>
                <Cart />
            </CartPageProvider>
        </LayoutProvider>
    );
};

export default CartPage;
