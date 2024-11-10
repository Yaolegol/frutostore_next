'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutCity: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.city.title" />
            </div>
            <div>
                <IntlMessage id="about.city.value" />
            </div>
        </div>
    );
};
