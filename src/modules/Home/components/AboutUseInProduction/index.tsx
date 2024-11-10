'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutUseInProduction: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.useInProd.title" />
            </div>
            <div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.useInProd.value1Title" />{' '}
                    </span>
                    <IntlMessage id="about.useInProd.value1" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.useInProd.value2Title" />{' '}
                    </span>
                    <IntlMessage id="about.useInProd.value2" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.useInProd.value3Title" />{' '}
                    </span>
                    <IntlMessage id="about.useInProd.value3" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.useInProd.value4Title" />{' '}
                    </span>
                    <IntlMessage id="about.useInProd.value4" />
                </div>
                <div className={style.description}>
                    <span className={style.bold}>
                        <IntlMessage id="about.useInProd.value5Title" />{' '}
                    </span>
                    <IntlMessage id="about.useInProd.value5" />
                </div>
            </div>
        </div>
    );
};
