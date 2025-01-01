'use client';

import { IFilter } from '@/modules/Filters/types';
import { createContext } from 'react';

export interface IFiltersContext {
    filters: IFilter[];
}

export const FiltersContext = createContext<IFiltersContext>({
    filters: [],
});
