import { getServerLangData } from '@/helpers/lang/server';
import { Metadata, NextPage } from 'next';
import { Catalog } from '@/modules/pages/Catalog';
import { LayoutProvider } from '@/modules/Layout/provider';

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
            <Catalog />
        </LayoutProvider>
    );
};

export default CartPage;
