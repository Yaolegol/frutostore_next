'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
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
                <IntlMessage id="pagination.toStart" />
            </button>
            <div>{page}</div>
            <button className={style.button} onClick={toLastPage} type="button">
                <IntlMessage id="pagination.toEnd" />
            </button>
        </div>
    );
};
