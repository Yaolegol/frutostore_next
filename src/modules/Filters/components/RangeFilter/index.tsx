import { Input } from '@/components/Input';
import { isStringOnlyNumbers } from '@/helpers/number/incex';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import style from './index.module.scss';

interface IProps {
    maxDefaultValue: string;
    maxPlaceholder: string;
    maxRange: number;
    minDefaultValue: string;
    minPlaceholder: string;
    minRange: number;
    title: string;
}

export const RangeFilter: FC<IProps> = ({
    maxDefaultValue,
    maxPlaceholder,
    maxRange,
    minDefaultValue,
    minPlaceholder,
    minRange,
    title,
}) => {
    const [minValue, setMinValue] = useState(minDefaultValue);
    const [maxValue, setMaxValue] = useState(maxDefaultValue);

    const handleChangeMin = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (!isStringOnlyNumbers(value)) {
                return;
            }

            if (value === '') {
                setMinValue(value);

                return;
            }

            const numberValue = Number(value);

            if (numberValue > maxRange) {
                setMinValue(String(maxRange));

                return;
            }

            if (numberValue < minRange) {
                setMinValue(String(minRange));

                return;
            }

            setMinValue(value);
        },
        [maxRange, minRange],
    );

    const handleChangeMax = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (!isStringOnlyNumbers(value)) {
                return;
            }

            if (value === '') {
                setMaxValue(value);

                return;
            }

            const numberValue = Number(value);

            if (numberValue > maxRange) {
                setMaxValue(String(maxRange));

                return;
            }

            if (numberValue < minRange) {
                setMaxValue(String(minRange));

                return;
            }

            setMaxValue(value);
        },
        [maxRange, minRange],
    );

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
