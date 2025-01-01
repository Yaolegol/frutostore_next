import { CheckboxFilterController } from '@/modules/Filters/controllers/CheckboxFilterController';
import { RangeFilterController } from '@/modules/Filters/controllers/RangeFilterController';
import { FC, useEffect, useState } from 'react';
import style from './index.module.scss';

export const Filters: FC = () => {
    const [isClientRender, setIsClientRender] = useState(false);

    useEffect(() => {
        setIsClientRender(true);
    }, []);

    if (!isClientRender) {
        return null;
    }

    return (
        <div>
            <RangeFilterController />
            <div className={style.container}>
                <CheckboxFilterController />
            </div>
        </div>
    );
};
