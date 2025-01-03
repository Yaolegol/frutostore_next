import { IOption, Select } from '@/components/Select';
import { SORT_OPTIONS, SORT_QUERY_NAME } from '@/modules/Sort/constants';
import { FC, useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { stringifySearchParams } from '@/helpers/query';
import { PAGE_QUERY_NAME } from '@/modules/pages/Catalog/constants';

export const SortSelectController: FC = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSelect = useCallback(
        ({ value }: IOption) => {
            const urlSP = new URLSearchParams(searchParams);
            urlSP.delete(SORT_QUERY_NAME);
            urlSP.delete(PAGE_QUERY_NAME);

            if (value) {
                urlSP.append(SORT_QUERY_NAME, value);
            }

            const query = stringifySearchParams(urlSP);

            router.push(pathname + query);
        },
        [pathname, router, searchParams],
    );

    const defaultSelectedOptionIndex = useMemo(() => {
        const defaultIndex = 0;
        const sortQuery = searchParams.get(SORT_QUERY_NAME) ?? '';

        if (!sortQuery) {
            return defaultIndex;
        }

        const index = SORT_OPTIONS.findIndex(
            ({ value }) => value === sortQuery,
        );

        if (index === -1) {
            return defaultIndex;
        }

        return index;
    }, [searchParams]);

    return (
        <Select
            defaultSelectedOptionIndex={defaultSelectedOptionIndex}
            onSelect={handleSelect}
            options={SORT_OPTIONS}
        />
    );
};
