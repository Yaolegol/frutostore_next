import { ChangeEvent, FocusEvent, FC } from 'react';
import style from './index.module.scss';

interface IProps {
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
}

export const Input: FC<IProps> = ({ onBlur, onChange, placeholder, value }) => {
    return (
        <input
            className={style.index}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            value={value}
        />
    );
};
