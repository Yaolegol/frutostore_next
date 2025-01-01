'use client';

import { FiltersContext } from '@/modules/Filters/context';
import { BrowserFilters } from '@/modules/Filters/helpers/BrowserFilters';
import { FC, ReactNode, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

interface IProps {
    children: ReactNode;
}

export const FiltersProvider: FC<IProps> = ({ children }) => {
    const searchParams = useSearchParams();

    const browserFilters = useMemo(() => {
        return BrowserFilters.getInstance();
    }, []);

    const value = useMemo(() => {
        const filters = browserFilters.filters;

        return {
            filters: filters,
        };
    }, [browserFilters.filters]);

    useEffect(() => {
        browserFilters.updateFilters();
    }, [browserFilters, searchParams]);

    return (
        <FiltersContext.Provider value={value}>
            {children}
        </FiltersContext.Provider>
    );
};
