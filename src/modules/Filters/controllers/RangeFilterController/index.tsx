import {
    RangeFilter,
    TRangeFilterValue,
} from '@/modules/Filters/components/RangeFilter';
import {
    FILTERS_KEYS,
    MAX_PRICE,
    MIN_PRICE,
} from '@/modules/Filters/constants';
import { FiltersContext } from '@/modules/Filters/context';
import { getFormattedRangeValueFromUrl } from '@/modules/Filters/helpers';
import { BrowserFilters } from '@/modules/Filters/helpers/BrowserFilters';
import { useCallback, useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';

const { PRICE } = FILTERS_KEYS;

export const RangeFilterController = () => {
    const { filters } = useContext(FiltersContext);
    const router = useRouter();

    const handleApply = useCallback(
        (value: TRangeFilterValue) => {
            const browserFilters = BrowserFilters.getInstance();
            const url = browserFilters.userAddRangeFilter(PRICE, value);

            router.push(url);
        },
        [router],
    );

    const [defaultMin, defaultMax] = useMemo(() => {
        const priceFilter = filters.find(({ key }) => {
            return key === PRICE;
        });

        if (!priceFilter) {
            return ['', ''];
        }

        const [min, max] = priceFilter.values;

        const minFormatted = getFormattedRangeValueFromUrl(min);
        const maxFormatted = getFormattedRangeValueFromUrl(max);

        return [minFormatted, maxFormatted];
    }, [filters]);

    return (
        <RangeFilter
            maxDefaultValue={defaultMax}
            maxPlaceholder={`до ${MAX_PRICE}`}
            maxRange={MAX_PRICE}
            minDefaultValue={defaultMin}
            minPlaceholder={`от ${MIN_PRICE}`}
            minRange={MIN_PRICE}
            onApply={handleApply}
            title="Цена"
        />
    );
};
