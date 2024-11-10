'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutEducation: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.education.title" />
            </div>
            <div>
                <IntlMessage id="about.education.value2" />
            </div>
        </div>
    );
};
