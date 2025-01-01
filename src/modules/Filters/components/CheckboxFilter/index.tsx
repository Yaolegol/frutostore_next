import { Checkbox } from '@/components/Checkbox';
import { IFilterOption } from '@/modules/Filters/types';
import { FC, useCallback, ChangeEvent } from 'react';
import style from './index.module.scss';

interface IProps {
    code: string;
    onChange: (isChecked: boolean, valueCode: string) => void;
    options: IFilterOption[];
    title: string;
}

export const CheckboxFilter: FC<IProps> = ({ onChange, options, title }) => {
    const handleChange = useCallback(
        (valueCode: string) => (e: ChangeEvent<HTMLInputElement>) => {
            const isChecked = e.target.checked;

            onChange(isChecked, valueCode);
        },
        [onChange],
    );

    return (
        <div>
            <div>{title}</div>
            <div className={style.options}>
                {options.map(({ isDefaultChecked, text, valueCode }) => {
                    return (
                        <div className={style.option} key={valueCode}>
                            <Checkbox
                                isDefaultChecked={isDefaultChecked}
                                onChange={handleChange(valueCode)}
                                text={text}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
