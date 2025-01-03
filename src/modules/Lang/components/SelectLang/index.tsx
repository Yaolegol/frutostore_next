'use client';

import { IOption, Select } from '@/components/Select';
import { LANG_OPTIONS } from '@/modules/Lang/constants';
import { LangContext } from '@/modules/Lang/context';
import { FC, useCallback, useContext } from 'react';

export const SelectLang: FC = () => {
    const { onLangChange } = useContext(LangContext);

    const handleSelect = useCallback(
        (option: IOption) => {
            onLangChange?.(option);
        },
        [onLangChange],
    );

    return <Select onSelect={handleSelect} options={LANG_OPTIONS} />;
};
