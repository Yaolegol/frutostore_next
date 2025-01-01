import { Input } from '@/components/Input';
import { isStringOnlyNumbers } from '@/helpers/number/incex';
import {
    ChangeEvent,
    FocusEvent,
    FC,
    useCallback,
    useState,
    useMemo,
    useEffect,
} from 'react';
import style from './index.module.scss';
import { debounce } from '@/helpers/debounce';

type value = number | undefined;
export type TRangeFilterValue = [value, value];

interface IProps {
    maxDefaultValue: string;
    maxPlaceholder: string;
    maxRange: number;
    minDefaultValue: string;
    minPlaceholder: string;
    minRange: number;
    onApply: (value: TRangeFilterValue) => void;
    title: string;
}

export const RangeFilter: FC<IProps> = ({
    maxDefaultValue,
    maxPlaceholder,
    maxRange,
    minDefaultValue,
    minPlaceholder,
    minRange,
    onApply,
    title,
}) => {
    const [minDefault, setMinDefault] = useState(minDefaultValue);
    const [minValue, setMinValue] = useState(minDefaultValue);
    const [maxDefault, setMaxDefault] = useState(maxDefaultValue);
    const [maxValue, setMaxValue] = useState(maxDefaultValue);

    useEffect(() => {
        if (minDefault === minDefaultValue) {
            return;
        }

        setMinDefault(minDefaultValue);
        setMinValue(minDefaultValue);
    }, [minDefault, minDefaultValue]);

    useEffect(() => {
        if (maxDefault === maxDefaultValue) {
            return;
        }

        setMaxDefault(maxDefaultValue);
        setMaxValue(maxDefaultValue);
    }, [maxDefault, maxDefaultValue]);

    const normalizeValue = useCallback(
        (value: string) => {
            if (!value) {
                return undefined;
            }

            const numberValue = Number(value);

            if (numberValue < minRange) {
                return minRange;
            }

            return numberValue;
        },
        [minRange],
    );

    const handleApply = useMemo(() => {
        return debounce<TRangeFilterValue>(onApply, 1000);
    }, [onApply]);

    const applyFilterMin = useCallback(
        (value: string) => {
            const min = normalizeValue(value);
            const max = normalizeValue(maxValue);

            handleApply([min, max]);
        },
        [handleApply, maxValue, normalizeValue],
    );

    const applyFilterMax = useCallback(
        (value: string) => {
            const min = normalizeValue(minValue);
            const max = normalizeValue(value);

            handleApply([min, max]);
        },
        [handleApply, minValue, normalizeValue],
    );

    const checkMinRange = useCallback(
        (value: string) => {
            if (value === '') {
                return;
            }

            const numberValue = Number(value);

            if (numberValue < minRange) {
                return String(minRange);
            }
        },
        [minRange],
    );

    const handleBlurMin = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            const newValue = checkMinRange(e.target.value);

            if (newValue) {
                setMinValue(newValue);
            }
        },
        [checkMinRange],
    );

    const handleBlurMax = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            const newValue = checkMinRange(e.target.value);

            if (newValue) {
                setMaxValue(newValue);
            }
        },
        [checkMinRange],
    );

    const handleChangeMin = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value === '') {
                setMinValue(value);
                applyFilterMin(value);

                return;
            }

            if (!isStringOnlyNumbers(value)) {
                return;
            }

            const numberValue = Number(value);

            if (numberValue > maxRange) {
                const newValue = String(maxRange);

                setMinValue(newValue);
                applyFilterMin(newValue);

                return;
            }

            setMinValue(value);
            applyFilterMin(value);
        },
        [applyFilterMin, maxRange],
    );

    const handleChangeMax = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value === '') {
                setMaxValue(value);
                applyFilterMax(value);

                return;
            }

            if (!isStringOnlyNumbers(value)) {
                return;
            }

            const numberValue = Number(value);

            if (numberValue > maxRange) {
                const newValue = String(maxRange);

                setMaxValue(newValue);
                applyFilterMax(newValue);

                return;
            }

            setMaxValue(value);
            applyFilterMax(value);
        },
        [applyFilterMax, maxRange],
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
