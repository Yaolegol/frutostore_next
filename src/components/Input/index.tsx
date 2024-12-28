import { ChangeEvent, FC } from 'react';
import style from './index.module.scss';

interface IProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
}

export const Input: FC<IProps> = ({ onChange, placeholder, value }) => {
    return (
        <input
            className={style.index}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            value={value}
        />
    );
};
