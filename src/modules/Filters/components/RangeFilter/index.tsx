import { Input } from '@/components/Input';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import style from './index.module.scss';

interface IProps {
    maxPlaceholder: string;
    maxDefaultValue: string;
    minPlaceholder: string;
    minDefaultValue: string;
    title: string;
}

export const RangeFilter: FC<IProps> = ({
    maxPlaceholder,
    maxDefaultValue,
    minPlaceholder,
    minDefaultValue,
    title,
}) => {
    const [minValue, setMinValue] = useState(minDefaultValue);
    const [maxValue, setMaxValue] = useState(maxDefaultValue);

    const handleChangeMin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        const numberValue = Number(value);

        if (Number.isNaN(numberValue)) {
            return;
        }

        setMinValue(value);
    }, []);

    const handleChangeMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        const numberValue = Number(value);

        if (Number.isNaN(numberValue)) {
            return;
        }

        setMaxValue(value);
    }, []);

    return (
        <div>
            <div>{title}</div>
            <div className={style.inputs}>
                <Input
                    onChange={handleChangeMin}
                    placeholder={minPlaceholder}
                    value={minValue}
                />
                <span>-</span>
                <Input
                    onChange={handleChangeMax}
                    placeholder={maxPlaceholder}
                    value={maxValue}
                />
            </div>
        </div>
    );
};
