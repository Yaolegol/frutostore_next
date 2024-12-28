import { LinkButton } from '@/components/LinkButton';
import { Slider } from '@/modules/pages/Home/components/Slider';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
    return (
        <div>
            <div className={style.slider}>
                <Slider />
            </div>
            <div className={style.link}>
                <LinkButton href="/catalog">К покупкам!</LinkButton>
            </div>
        </div>
    );
};
