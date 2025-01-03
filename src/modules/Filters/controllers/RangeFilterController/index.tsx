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
import { LangContext } from '@/modules/Lang/context';
import { useCallback, useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { getMessage } from '@/modules/Lang/helpers';

const { PRICE } = FILTERS_KEYS;

export const RangeFilterController = () => {
    const { langText } = useContext(LangContext);
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
            maxPlaceholder={`${getMessage('filters.range.to.title', langText)} ${MAX_PRICE}`}
            maxRange={MAX_PRICE}
            minDefaultValue={defaultMin}
            minPlaceholder={`${getMessage('filters.range.from.title', langText)} ${MIN_PRICE}`}
            minRange={MIN_PRICE}
            onApply={handleApply}
            title={getMessage('common.price.title', langText)}
        />
    );
};
