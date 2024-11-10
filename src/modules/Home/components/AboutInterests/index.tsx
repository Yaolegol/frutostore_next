'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutInterests: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.interests.title" />
            </div>
            <div>
                <IntlMessage id="about.interests.value" />
            </div>
        </div>
    );
};
