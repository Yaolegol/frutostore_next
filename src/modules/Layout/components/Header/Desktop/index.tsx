import { AreaLeft } from '@/modules/Layout/components/Header/AreaLeft';
import { AreaRight } from '@/modules/Layout/components/Header/AreaRight';
import { Nav } from '@/modules/Layout/components/Header/Nav';
import { FC } from 'react';
import style from './index.module.scss';

export const Desktop: FC = () => {
    return (
        <div className={style.index}>
            <AreaLeft />
            <Nav />
            <AreaRight />
        </div>
    );
};
