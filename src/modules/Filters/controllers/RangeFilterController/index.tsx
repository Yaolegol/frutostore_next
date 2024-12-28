import { RangeFilter } from '@/modules/Filters/components/RangeFilter';
import { MAX_PRICE, MIN_PRICE } from '@/modules/Filters/constants';

export const RangeFilterController = () => {
    return (
        <RangeFilter
            maxDefaultValue=""
            maxPlaceholder={`до ${MAX_PRICE}`}
            maxRange={MAX_PRICE}
            minDefaultValue=""
            minPlaceholder={`от ${MIN_PRICE}`}
            minRange={MIN_PRICE}
            title="Цена"
        />
    );
};
