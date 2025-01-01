import { CheckboxFilter } from '@/modules/Filters/components/CheckboxFilter';
import { FILTERS_KEYS, TYPE_FILTER_OPTIONS } from '@/modules/Filters/constants';
import { FiltersContext } from '@/modules/Filters/context';
import { BrowserFilters } from '@/modules/Filters/helpers/BrowserFilters';
import { useCallback, useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';

const { TYPE } = FILTERS_KEYS;

export const CheckboxFilterController = () => {
    const { filters } = useContext(FiltersContext);
    const router = useRouter();

    const handleApply = useCallback(
        (value: string) => {
            const browserFilters = BrowserFilters.getInstance();
            const url = browserFilters.userAddFilter(TYPE, value);

            router.push(url);
        },
        [router],
    );

    const handleDiscard = useCallback(
        (value: string) => {
            const browserFilters = BrowserFilters.getInstance();
            const url = browserFilters.userRemoveFilter(TYPE, value);

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
        const currentFilter = filters.find(({ key }) => key === TYPE);

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
            code={TYPE}
            onChange={handleChange}
            options={options}
            title="Категория"
        />
    );
};
