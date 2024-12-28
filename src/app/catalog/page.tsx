import { getServerLangData } from '@/helpers/lang/server';
import { Catalog } from '../../modules/pages/Catalog';
import { CatalogProvider } from '@/modules/pages/Catalog/provider';
import { CatalogService } from '@/modules/pages/Catalog/service';
import { LangContextProvider } from '@/modules/Lang/provider';
import { Layout } from '@/modules/Layout/components/Layout';
import { INextPageProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store catalog',
};

const catalogService = new CatalogService();

const CatalogPage = async ({ searchParams }: INextPageProps) => {
    const { page } = searchParams;

    const { defaultLangOption, defaultLangText } = await getServerLangData();

    const data = await catalogService.getProducts({ page: page ?? 1 });

    return (
        <LangContextProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <Layout>
                <CatalogProvider defaultData={data}>
                    <Catalog />
                </CatalogProvider>
            </Layout>
        </LangContextProvider>
    );
};

export default CatalogPage;
