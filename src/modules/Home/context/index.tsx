'use client';

import { IOption } from '@/components/Select';
import { ILangData } from '@/modules/Lang/types';
import { createContext, Dispatch, SetStateAction } from 'react';

export interface IHomePageContext {
    activeTab?: number;
    langOption?: ILangData;
    langText?: any;
    onLangChange?: (option: IOption) => void;
    setActiveTab?: Dispatch<SetStateAction<number>>;
}

export const HomePageContext = createContext<IHomePageContext>({});
