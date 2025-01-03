'use client';

import { IOption } from '@/components/Select';
import { getLangText } from '@/helpers/lang';
import { LangContext } from '@/modules/Lang/context';
import { ILangData } from '@/modules/Lang/types';
import { FC, useState, ReactNode, useCallback } from 'react';

interface IProps {
    children: ReactNode;
    defaultLangOption: IOption;
    defaultLangText: any;
}

export const LangContextProvider: FC<IProps> = ({
    children,
    defaultLangOption,
    defaultLangText,
}) => {
    const [langOption, setLangOption] = useState<ILangData>(defaultLangOption);
    const [langText, setLangText] = useState<any>(defaultLangText);

    const importText = useCallback(
        async ({ value }: IOption) => {
            const lantText = await getLangText(value);

            setLangText?.(lantText);
        },
        [setLangText],
    );

    const onLangChange = useCallback(
        (option: IOption) => {
            setLangOption(option);
            importText(option);
        },
        [importText],
    );

    return (
        <LangContext.Provider
            value={{
                langOption,
                langText,
                onLangChange,
            }}
        >
            {children}
        </LangContext.Provider>
    );
};
