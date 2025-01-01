import { FiltersFromUrl } from '@/modules/Filters/helpers/FiltersFromUrl';
import {
    URL_FILTER_KEY_VALUES_SEPARATOR,
    URL_FILTER_VALUES_SEPARATOR,
    URL_FILTERS_KEY,
    URL_FILTERS_SEPARATOR,
} from '@/modules/Filters/constants';

interface IFilter {
    key: string;
    values: string[];
}

export class BrowserFilters {
    constructor() {
        this.init();
    }

    filters: IFilter[] = [];

    private addRangeFilter = (key: string, values: string[]) => {
        const [min, max] = values;
        const isFilterWithValues = Boolean(min) && Boolean(max);
        const currentFilter = this.filters.find((filter) => filter.key === key);

        if (!currentFilter) {
            this.filters.push({
                key,
                values,
            });

            return;
        }

        if (!isFilterWithValues) {
            this.filters = this.filters.filter((filter) => filter.key !== key);

            return;
        }

        currentFilter.values = values;
    };

    private getFiltersQuery = () => {
        if (!this.filters.length) {
            return '';
        }

        const queryArray: string[] = [];

        this.filters.forEach(({ key, values }) => {
            if (!values.length) {
                return;
            }

            const valuesString = values.join(URL_FILTER_VALUES_SEPARATOR);
            const result = `${key}${URL_FILTER_KEY_VALUES_SEPARATOR}${valuesString}`;

            queryArray.push(result);
        });

        return queryArray.join(URL_FILTERS_SEPARATOR);
    };

    getNonFiltersQuery = () => {
        const urlSP = new URLSearchParams(window.location.search);
        urlSP.delete(URL_FILTERS_KEY);

        return urlSP;
    };

    private getURl = () => {
        const query = this.getFiltersQuery();
        const urlSP = this.getNonFiltersQuery();

        if (query) {
            urlSP.append(URL_FILTERS_KEY, query);
        }

        return this.getUrlWithQuery(urlSP);
    };

    private getUrlWithQuery = (urlSP: URLSearchParams) => {
        const queryString = urlSP.toString();
        const query = queryString ? `?${queryString}` : '';

        return window.location.pathname + query;
    };

    private init = () => {
        const { filters } = new FiltersFromUrl();

        this.filters = filters;
    };

    userAddRangeFilter = (key: string, values: string[]) => {
        this.addRangeFilter(key, values);

        return this.getURl();
    };
}
