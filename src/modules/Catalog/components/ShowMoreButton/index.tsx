'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const ShowMoreButton: FC = () => {
    const { getNextPage, lastPage, page } = useContext(CatalogContext);

    if (!page || !lastPage || page >= lastPage) {
        return null;
    }

    return (
        <button className={style.index} onClick={getNextPage} type="button">
            Показать еще
        </button>
    );
};
