'use client';

import { IOption } from '@/components/Select';
import { ILangData } from '@/modules/Lang/types';
import { FC, useState, ReactNode, useCallback } from 'react';
import { LangContext } from '@/modules/Lang/context';

interface IProps {
    children: ReactNode;
    defaultLangOption: IOption;
    defaultLangText: any;
}

export const LangContextProvider: FC<IProps> = ({
    children,
    defaultLangOption,
}) => {
    const [langOption, setLangOption] = useState<ILangData>(defaultLangOption);

    const onLangChange = useCallback((option: IOption) => {
        setLangOption(option);
    }, []);

    return (
        <LangContext.Provider
            value={{
                langOption,
                onLangChange,
            }}
        >
            {children}
        </LangContext.Provider>
    );
};
