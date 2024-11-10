'use client';

import { AboutAge } from '@/modules/Home/components/AboutAge';
import { AboutCity } from '@/modules/Home/components/AboutCity';
import { AboutEducation } from '@/modules/Home/components/AboutEducation';
import { AboutHomeExperience } from '@/modules/Home/components/AboutHomeExperience';
import { AboutInterests } from '@/modules/Home/components/AboutInterests';
import { AboutProductionExperience } from '@/modules/Home/components/AboutProductionExperience';
import { AboutUseInProduction } from '@/modules/Home/components/AboutUseInProduction';
import { AboutWorkExperience } from '@/modules/Home/components/AboutWorkExperience';
import { AboutWorkTasks } from '@/modules/Home/components/AboutWorkTasks';
import { FC } from 'react';
import style from './index.module.scss';

export const About: FC = () => {
    return (
        <div>
            <div className={style.offset}>
                <AboutProductionExperience />
            </div>
            <div className={style.offset}>
                <AboutUseInProduction />
            </div>
            <div className={style.offset}>
                <AboutAge />
            </div>
            <div className={style.offset}>
                <AboutCity />
            </div>
            <div className={style.offset}>
                <AboutEducation />
            </div>
            <div className={style.offset}>
                <AboutWorkExperience />
            </div>
            <div className={style.offset}>
                <AboutInterests />
            </div>
            <div className={style.offset}>
                <AboutHomeExperience />
            </div>
            <div className={style.offset}>
                <AboutWorkTasks />
            </div>
        </div>
    );
};
