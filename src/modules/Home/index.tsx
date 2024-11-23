import { Slider } from '@/modules/Home/components/Slider';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
    return (
        <div>
            <div className={style.container}>
                <Slider />
            </div>
        </div>
    );
};
