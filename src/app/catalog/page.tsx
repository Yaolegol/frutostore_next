import { getLangFromHeaders } from '@/helpers/lang/server';
import { FiltersProvider } from '@/modules/Filters/provider';
import { CatalogProvider } from '@/modules/pages/Catalog/provider';
import { CatalogService } from '@/modules/pages/Catalog/service';
import { Catalog } from '@/modules/pages/Catalog';
import { INextPageProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store catalog',
};

const catalogService = new CatalogService();

const CatalogPage = async ({ searchParams }: INextPageProps) => {
    const { filters, page, sort } = searchParams;
    const lang = getLangFromHeaders();

    const data = await catalogService.getProducts({
        filters,
        locale: lang,
        page,
        sort,
    });

    return (
        <CatalogProvider defaultData={data}>
            <FiltersProvider>
                <Catalog />
            </FiltersProvider>
        </CatalogProvider>
    );
};

export default CatalogPage;
