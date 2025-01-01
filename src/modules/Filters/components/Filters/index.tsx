import { Checkbox } from '@/components/Checkbox';
import { RangeFilterController } from '@/modules/Filters/controllers/RangeFilterController';
import { FC } from 'react';
import style from './index.module.scss';

export const Filters: FC = () => {
    return (
        <div className={style.index}>
            <RangeFilterController />
            <div>
                <Checkbox text="test" />
            </div>
        </div>
    );
};
