import {
    URL_FILTER_KEY_VALUES_SEPARATOR,
    URL_FILTER_VALUES_SEPARATOR,
    URL_FILTERS_KEY,
    URL_FILTERS_SEPARATOR,
} from '@/modules/Filters/constants';
import { isBrowser } from '@/helpers/browser';

interface IFilter {
    key: string;
    values: string[];
}

export class FiltersFromUrl {
    constructor() {
        if (!isBrowser()) {
            return;
        }

        this.init();
    }

    private filtersQuery: string | null = '';

    filters: IFilter[] = [];

    private init = () => {
        const urlSP = new URLSearchParams(window.location.search);
        this.filtersQuery = urlSP.get(URL_FILTERS_KEY);

        if (!this.filtersQuery) {
            return;
        }

        this.setFilters();
    };

    private setFilters = () => {
        const filtersList = this.filtersQuery?.split(URL_FILTERS_SEPARATOR);

        if (!filtersList) {
            return;
        }

        const filteredList = filtersList.filter(Boolean);

        const resultList: IFilter[] = [];

        filteredList.forEach((filterItem) => {
            const [key, values] = filterItem.split(
                URL_FILTER_KEY_VALUES_SEPARATOR,
            );

            if (!values) {
                return;
            }

            resultList.push({
                key,
                values: values.split(URL_FILTER_VALUES_SEPARATOR),
            });
        });

        this.filters = resultList;
    };
}
