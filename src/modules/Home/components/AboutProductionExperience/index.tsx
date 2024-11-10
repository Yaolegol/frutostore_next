'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutProductionExperience: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.workExperienceFrontend.title" />
            </div>
            <div className={style.bold}>
                4+ <IntlMessage id="main.workExperience.measure" />
            </div>
        </div>
    );
};
