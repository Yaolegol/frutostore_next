import { CheckboxFilter } from '@/modules/Filters/components/CheckboxFilter';
import { FILTERS_KEYS, TYPE_FILTER_OPTIONS } from '@/modules/Filters/constants';
import { FiltersContext } from '@/modules/Filters/context';
import { BrowserFilters } from '@/modules/Filters/helpers/BrowserFilters';
import { LangContext } from '@/modules/Lang/context';
import { useCallback, useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { getMessage } from '@/modules/Lang/helpers';

const { CATEGORY } = FILTERS_KEYS;

export const CheckboxFilterController = () => {
    const { langText } = useContext(LangContext);
    const { filters } = useContext(FiltersContext);
    const router = useRouter();

    const handleApply = useCallback(
        (value: string) => {
            const browserFilters = BrowserFilters.getInstance();
            const url = browserFilters.userAddFilter(CATEGORY, value);

            router.push(url);
        },
        [router],
    );

    const handleDiscard = useCallback(
        (value: string) => {
            const browserFilters = BrowserFilters.getInstance();
            const url = browserFilters.userRemoveFilter(CATEGORY, value);

            router.push(url);
        },
        [router],
    );

    const handleChange = useCallback(
        (isChecked: boolean, value: string) => {
            if (isChecked) {
                handleApply(value);

                return;
            }

            handleDiscard(value);
        },
        [handleApply, handleDiscard],
    );

    const options = useMemo(() => {
        const currentFilter = filters.find(({ key }) => key === CATEGORY);

        if (!currentFilter) {
            return TYPE_FILTER_OPTIONS;
        }

        return TYPE_FILTER_OPTIONS.map((option) => {
            const isDefaultChecked = currentFilter.values.includes(
                option.valueCode,
            );

            return {
                ...option,
                isDefaultChecked,
            };
        });
    }, [filters]);

    return (
        <CheckboxFilter
            code={CATEGORY}
            onChange={handleChange}
            options={options}
            title={getMessage('common.category.title', langText)}
        />
    );
};
