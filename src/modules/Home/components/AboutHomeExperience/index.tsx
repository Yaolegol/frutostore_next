'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutHomeExperience: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.skills.title" />
            </div>
            <div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.skills.value1Title" />{' '}
                    </span>
                    <IntlMessage id="about.skills.value1" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.skills.value2Title" />{' '}
                    </span>
                    <IntlMessage id="about.skills.value2" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.skills.value3Title" />{' '}
                    </span>
                    <IntlMessage id="about.skills.value3" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.skills.value4Title" />{' '}
                    </span>
                    <IntlMessage id="about.skills.value4" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.skills.value5Title" />{' '}
                    </span>
                    <IntlMessage id="about.skills.value5" />
                </div>
            </div>
        </div>
    );
};
