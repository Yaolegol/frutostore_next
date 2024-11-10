'use client';

import { Tab } from '@/modules/Home/components/Tab';
import { TAB_ID_ABOUT_ME, TAB_ID_PROJECTS } from '@/modules/Home/constants';
import { HomePageContext } from '@/modules/Home/context';
import { FC, useCallback, useContext } from 'react';
import style from './index.module.scss';

export const Tabs: FC = () => {
    const { activeTab, setActiveTab } = useContext(HomePageContext);

    const handleSelectTab = useCallback((id: number) => {
        setActiveTab?.(id);
    }, []);

    return (
        <div className={style.index}>
            <div className={style.item}>
                <Tab
                    activeId={activeTab}
                    icon="profile"
                    id={TAB_ID_ABOUT_ME}
                    onClick={handleSelectTab}
                    title="main.menu.about"
                />
            </div>
            <div className={style.item}>
                <Tab
                    activeId={activeTab}
                    icon="projects"
                    id={TAB_ID_PROJECTS}
                    onClick={handleSelectTab}
                    title="main.menu.projects"
                />
            </div>
        </div>
    );
};
