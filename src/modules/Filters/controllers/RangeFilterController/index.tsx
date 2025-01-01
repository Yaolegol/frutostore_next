import {
    RangeFilter,
    TRangeFilterValue,
} from '@/modules/Filters/components/RangeFilter';
import { MAX_PRICE, MIN_PRICE } from '@/modules/Filters/constants';
import { useCallback } from 'react';

export const RangeFilterController = () => {
    const handleApply = useCallback((value: TRangeFilterValue) => {
        console.log('value');
        console.log(value);
    }, []);

    return (
        <RangeFilter
            maxDefaultValue=""
            maxPlaceholder={`до ${MAX_PRICE}`}
            maxRange={MAX_PRICE}
            minDefaultValue=""
            minPlaceholder={`от ${MIN_PRICE}`}
            minRange={MIN_PRICE}
            onApply={handleApply}
            title="Цена"
        />
    );
};
