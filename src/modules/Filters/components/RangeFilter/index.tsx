import { Input } from '@/components/Input';
import { isStringOnlyNumbers } from '@/helpers/number/incex';
import { ChangeEvent, FocusEvent, FC, useCallback, useState } from 'react';
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

    const handleBlurMin = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value === '') {
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
        },
        [maxRange, minRange],
    );

    const handleBlurMax = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value === '') {
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
        },
        [maxRange, minRange],
    );

    const handleChangeMin = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value === '') {
                setMinValue(value);

                return;
            }

            if (!isStringOnlyNumbers(value)) {
                return;
            }

            const numberValue = Number(value);

            if (numberValue > maxRange) {
                setMinValue(String(maxRange));

                return;
            }

            setMinValue(value);
        },
        [maxRange],
    );

    const handleChangeMax = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value === '') {
                setMaxValue(value);

                return;
            }

            if (!isStringOnlyNumbers(value)) {
                return;
            }

            const numberValue = Number(value);

            if (numberValue > maxRange) {
                setMaxValue(String(maxRange));

                return;
            }

            setMaxValue(value);
        },
        [maxRange],
    );

    return (
        <div>
            <div>{title}</div>
            <div className={style.inputs}>
                <Input
                    onBlur={handleBlurMin}
                    onChange={handleChangeMin}
                    placeholder={minPlaceholder}
                    value={minValue}
                />
                <span>-</span>
                <Input
                    onBlur={handleBlurMax}
                    onChange={handleChangeMax}
                    placeholder={maxPlaceholder}
                    value={maxValue}
                />
            </div>
        </div>
    );
};
