import { CheckboxFilterController } from '@/modules/Filters/controllers/CheckboxFilterController';
import { RangeFilterController } from '@/modules/Filters/controllers/RangeFilterController';
import { FC } from 'react';
import style from './index.module.scss';

export const Filters: FC = () => {
    return (
        <div>
            <RangeFilterController />
            <div className={style.container}>
                <CheckboxFilterController />
            </div>
        </div>
    );
};
