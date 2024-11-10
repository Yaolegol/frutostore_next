'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const Description: FC = () => {
    return (
        <div className={style.index}>
            <IntlMessage id="main.description" />
        </div>
    );
};
