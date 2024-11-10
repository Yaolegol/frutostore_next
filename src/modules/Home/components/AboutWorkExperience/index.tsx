'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutWorkExperience: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.workExperience.title" />
            </div>
            <div>
                <div className={style.description}>
                    <IntlMessage id="about.workExperience.value1" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.workExperience.value2" />
                </div>
            </div>
        </div>
    );
};
