import { AreaLeft } from '@/modules/Layout/components/Header/AreaLeft';
import { AreaRight } from '@/modules/Layout/components/Header/AreaRight';
import { Nav } from '@/modules/Layout/components/Header/Nav';
import { FC } from 'react';
import style from './index.module.scss';

export const Header: FC = () => {
    return (
        <header className={style.index}>
            <div className={style.container}>
                <AreaLeft />
                <Nav />
                <AreaRight />
            </div>
        </header>
    );
};
