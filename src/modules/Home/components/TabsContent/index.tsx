'use client';

import { styles } from '@/helpers/styles';
import { About } from '@/modules/Home/components/About';
import { TAB_ID_ABOUT_ME } from '@/modules/Home/constants';
import { HomePageContext } from '@/modules/Home/context';
import { FC, useContext } from 'react';
import style from './index.module.scss';

export const TabsContent: FC = () => {
    const { activeTab } = useContext(HomePageContext);

    return (
        <div
            className={styles(
                style.index,
                activeTab === TAB_ID_ABOUT_ME ? style.about : '',
            )}
        >
            <div className={style.aboutContainer}>
                <About />
            </div>
            <div className={style.projectsContainer}>test</div>
        </div>
    );
};
