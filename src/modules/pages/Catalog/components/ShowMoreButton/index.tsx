'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { CatalogContext } from '@/modules/pages/Catalog/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const ShowMoreButton: FC = () => {
    const { getNextPage, lastPage, page } = useContext(CatalogContext);

    if (!page || !lastPage || page >= lastPage) {
        return null;
    }

    return (
        <button className={style.index} onClick={getNextPage} type="button">
            <IntlMessage id="pagination.more" />
        </button>
    );
};
