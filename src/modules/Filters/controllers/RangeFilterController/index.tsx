import {
    RangeFilter,
    TRangeFilterValue,
} from '@/modules/Filters/components/RangeFilter';
import {
    FILTERS_KEYS,
    MAX_PRICE,
    MIN_PRICE,
} from '@/modules/Filters/constants';
import { useCallback, useMemo } from 'react';
import { BrowserFilters } from '@/modules/Filters/helpers/BrowserFilters';
import { useRouter } from 'next/navigation';
import { getFormattedRangeValueFromUrl } from '@/modules/Filters/helpers';

const { PRICE } = FILTERS_KEYS;

export const RangeFilterController = () => {
    const router = useRouter();

    const browserFilters = useMemo(() => {
        return BrowserFilters.getInstance();
    }, []);

    const handleApply = useCallback(
        (value: TRangeFilterValue) => {
            const url = browserFilters.userAddRangeFilter(PRICE, value);

            router.push(url);
        },
        [browserFilters, router],
    );

    const [defaultMin, defaultMax] = useMemo(() => {
        const filters = browserFilters.filters;

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
    }, [browserFilters]);

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
