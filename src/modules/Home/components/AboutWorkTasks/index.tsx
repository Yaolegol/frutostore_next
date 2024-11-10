'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutWorkTasks: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.experience.title" />
            </div>
            <div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value1" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value2" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value3" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value4" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value5" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value6" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value7" />
                </div>
                <div className={style.description}>
                    <IntlMessage id="about.experience.value8" />
                </div>
            </div>
        </div>
    );
};
