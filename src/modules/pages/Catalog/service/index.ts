import { ICatalogData } from '@/modules/pages/Catalog/types';
import { ApiService } from '@/service';
import { stringifySearchParams } from '@/helpers/query';

const CATALOG_ROOT_PATH = '/catalog';

const apiService = ApiService.getInstance();

interface IGetProductsProps {
    filters?: string;
    locale?: string;
    page?: string;
    perPage?: string;
    sort?: string;
}

export class CatalogService {
    getProducts = async (params: IGetProductsProps = {}) => {
        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
            if (!value) {
                searchParams.delete(key);

                return;
            }

            searchParams.append(key, value);
        });

        const query = stringifySearchParams(searchParams);

        try {
            const { data } = await apiService.get<ICatalogData>(
                `${CATALOG_ROOT_PATH}${query}`,
            );

            return data;
        } catch (e) {
            console.error(e);
        }

        return null;
    };
}
