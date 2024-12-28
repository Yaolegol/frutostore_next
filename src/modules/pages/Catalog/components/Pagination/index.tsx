'use client';

import { CatalogContext } from '@/modules/pages/Catalog/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const Pagination: FC = () => {
    const { page, toFirstPage, toLastPage } = useContext(CatalogContext);

    return (
        <div className={style.index}>
            <button
                className={style.button}
                onClick={toFirstPage}
                type="button"
            >
                в начало
            </button>
            <div>{page}</div>
            <button className={style.button} onClick={toLastPage} type="button">
                в конец
            </button>
        </div>
    );
};
