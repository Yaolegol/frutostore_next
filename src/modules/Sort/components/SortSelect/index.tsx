import { IOption, Select } from '@/components/Select';
import { SORT_OPTIONS } from '@/modules/Sort/constants';
import { FC, useCallback } from 'react';

export const SortSelect: FC = () => {
    const handleSelect = useCallback((option: IOption) => {
        console.log('option');
        console.log(option);
    }, []);

    return <Select onSelect={handleSelect} options={SORT_OPTIONS} />;
};
