import { ChangeEvent, FocusEvent, FC } from 'react';
import style from './index.module.scss';

export interface IProps {
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    placeholder: string;
    value: string;
}

export const Input: FC<IProps> = ({
    name,
    onBlur,
    onChange,
    placeholder,
    value,
}) => {
    return (
        <input
            className={style.index}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            value={value}
        />
    );
};
