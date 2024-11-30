import { getServerLangData } from '@/helpers/lang/server';
import { Catalog } from '@/modules/Catalog';
import { LangContextProvider } from '@/modules/Lang/provider';
import { Layout } from '@/modules/Layout/components/Layout';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store catalog',
};

const CatalogPage: NextPage = async () => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();

    return (
        <LangContextProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <Layout>
                <Catalog />
            </Layout>
        </LangContextProvider>
    );
};

export default CatalogPage;
