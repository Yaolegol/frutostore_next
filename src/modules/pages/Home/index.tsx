import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { Slider } from '@/modules/pages/Home/components/Slider';
import { ROUTE_CATALOG } from '@/routing';
import Link from 'next/link';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.slider}>
                <Slider />
            </div>
            <div className={style.linkContainer}>
                <Link className={style.link} href={ROUTE_CATALOG}>
                    <IntlMessage id="home.toBuy" />
                </Link>
            </div>
        </div>
    );
};
