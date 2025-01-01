import { isBrowser } from '@/helpers/browser';
import { TRangeFilterValue } from '@/modules/Filters/components/RangeFilter';
import {
    URL_FILTER_KEY_VALUES_SEPARATOR,
    URL_FILTER_VALUES_SEPARATOR,
    URL_FILTERS_KEY,
    URL_FILTERS_SEPARATOR,
} from '@/modules/Filters/constants';
import { FiltersFromUrl } from '@/modules/Filters/helpers/FiltersFromUrl';
import { IFilter } from '@/modules/Filters/types';
import { PAGE_QUERY_NAME } from '@/modules/pages/Catalog/constants';

export class BrowserFilters {
    private constructor() {
        if (!isBrowser()) {
            return;
        }

        this.init();
    }

    static instance: BrowserFilters | null = null;

    filters: IFilter[] = [];

    static getInstance = () => {
        if (!BrowserFilters.instance) {
            BrowserFilters.instance = new BrowserFilters();
        }

        return BrowserFilters.instance;
    };

    private addFilter = (key: string, value: string) => {
        const currentFilter = this.getCurrentFilter(key);

        if (!currentFilter) {
            this.filters.push({
                key,
                values: [value],
            });

            return;
        }

        const isValueAlreadyExists = currentFilter.values.includes(value);

        if (isValueAlreadyExists) {
            return;
        }

        currentFilter.values.push(value);
    };

    private addRangeFilter = (key: string, values: TRangeFilterValue) => {
        const [min, max] = values;
        const isFilterWithValues = Boolean(min) || Boolean(max);
        const stringValues = [String(min), String(max)];
        const currentFilter = this.getCurrentFilter(key);

        if (!currentFilter) {
            if (!isFilterWithValues) {
                return;
            }

            this.filters.push({
                key,
                values: stringValues,
            });

            return;
        }

        if (!isFilterWithValues) {
            this.filters = this.filters.filter((filter) => filter.key !== key);

            return;
        }

        currentFilter.values = stringValues;
    };

    private getCurrentFilter = (key: string) => {
        return this.filters.find((filter) => filter.key === key);
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

    private getNonFiltersQuery = () => {
        const urlSP = new URLSearchParams(window.location.search);
        urlSP.delete(URL_FILTERS_KEY);

        return urlSP;
    };

    private getURl = () => {
        const query = this.getFiltersQuery();
        const urlSP = this.getNonFiltersQuery();

        urlSP.delete(PAGE_QUERY_NAME);

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
        this.updateFilters();
    };

    private removeFilter = (key: string, value: string) => {
        const currentFilter = this.getCurrentFilter(key);

        if (!currentFilter) {
            return;
        }

        currentFilter.values = currentFilter.values.filter(
            (val) => val !== value,
        );

        if (!currentFilter.values.length) {
            this.filters.filter((filter) => filter.key !== key);
        }
    };

    updateFilters = () => {
        const { filters } = new FiltersFromUrl();

        console.log('filters');
        console.log(filters);

        this.filters = filters;
    };

    userAddFilter = (key: string, value: string) => {
        this.addFilter(key, value);

        return this.getURl();
    };

    userAddRangeFilter = (key: string, values: TRangeFilterValue) => {
        this.addRangeFilter(key, values);

        return this.getURl();
    };

    userRemoveFilter = (key: string, value: string) => {
        this.removeFilter(key, value);

        return this.getURl();
    };
}
