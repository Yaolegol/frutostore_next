import { RangeFilter } from '@/modules/Filters/components/RangeFilter';

export const RangeFilterController = () => {
    return (
        <RangeFilter
            maxDefaultValue="1000"
            maxPlaceholder="до"
            minDefaultValue="100"
            minPlaceholder="от"
            title="Цена"
        />
    );
};
