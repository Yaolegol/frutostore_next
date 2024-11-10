'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const Title: FC = () => {
    return (
        <div className={style.index}>
            <h1>
                <IntlMessage id="main.name" />
            </h1>
            <div className={style.description}>
                <IntlMessage id="main.profession" />
            </div>
            <div>
                <IntlMessage id="main.workExperience" />
                <span className={style.years}>
                    {' '}
                    4+ <IntlMessage id="main.workExperience.measure" />
                </span>
            </div>
        </div>
    );
};
