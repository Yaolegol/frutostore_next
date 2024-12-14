import { ICatalogData } from '@/modules/Catalog/types';
import { ApiService } from '@/service';

const apiService = ApiService.getInstance();

export class CatalogService {
    getProducts = async () => {
        try {
            const { data } = await apiService.get<ICatalogData>('/catalog');

            return data;
        } catch (e) {
            console.error(e);
        }

        return null;
    };
}
