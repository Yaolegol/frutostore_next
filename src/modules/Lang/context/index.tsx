'use client';

import { IOption } from '@/components/Select';
import { ILangData } from '@/modules/Lang/types';
import { createContext } from 'react';

export interface ILangContext {
    langOption?: ILangData;
    langText?: any;
    onLangChange?: (option: IOption) => void;
}

export const LangContext = createContext<ILangContext>({});
