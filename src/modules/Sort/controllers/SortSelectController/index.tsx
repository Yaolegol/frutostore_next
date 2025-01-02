import { IOption, Select } from '@/components/Select';
import { SORT_OPTIONS, SORT_QUERY_NAME } from '@/modules/Sort/constants';
import { FC, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { stringifySearchParams } from '@/helpers/query';

export const SortSelectController: FC = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSelect = useCallback(
        ({ value }: IOption) => {
            const urlSP = new URLSearchParams(searchParams);
            urlSP.delete(SORT_QUERY_NAME);

            if (value) {
                urlSP.append(SORT_QUERY_NAME, value);
            }

            const query = stringifySearchParams(urlSP);

            router.push(pathname + query);
        },
        [pathname, router, searchParams],
    );

    return <Select onSelect={handleSelect} options={SORT_OPTIONS} />;
};
