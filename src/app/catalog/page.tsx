import { getServerLangData } from '@/helpers/lang/server';
import { Catalog } from '@/modules/Catalog';
import { CatalogService } from '@/modules/Catalog/service';
import { LangContextProvider } from '@/modules/Lang/provider';
import { Layout } from '@/modules/Layout/components/Layout';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store catalog',
};

const catalogService = new CatalogService();

const CatalogPage: NextPage = async () => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();

    const data = await catalogService.getProducts();

    return (
        <LangContextProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <Layout>
                <Catalog list={data} />
            </Layout>
        </LangContextProvider>
    );
};

export default CatalogPage;
