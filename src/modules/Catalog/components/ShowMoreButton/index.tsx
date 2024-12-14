'use client';

import { CatalogContext } from '@/modules/Catalog/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const ShowMoreButton: FC = () => {
    const { getNextPage, lastPage, page } = useContext(CatalogContext);

    const handleClick = () => {
        getNextPage?.();
    };

    if (!page || !lastPage || page >= lastPage) {
        return null;
    }

    return (
        <div className={style.index}>
            <button onClick={handleClick} type="button">
                Показать еще
            </button>
        </div>
    );
};
