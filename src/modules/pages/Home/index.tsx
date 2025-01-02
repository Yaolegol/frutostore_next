import { Slider } from '@/modules/pages/Home/components/Slider';
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
                <Link className={style.link} href="/catalog">
                    К покупкам!
                </Link>
            </div>
        </div>
    );
};
