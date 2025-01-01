import { CheckboxFilter } from '@/modules/Filters/components/CheckboxFilter';
import { FILTERS_KEYS, TYPE_FILTER_OPTIONS } from '@/modules/Filters/constants';
import { FiltersContext } from '@/modules/Filters/context';
import { BrowserFilters } from '@/modules/Filters/helpers/BrowserFilters';
import { useCallback, useContext } from 'react';
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

    return (
        <CheckboxFilter
            code={TYPE}
            onChange={handleChange}
            options={TYPE_FILTER_OPTIONS}
            title="Категория"
        />
    );
};
