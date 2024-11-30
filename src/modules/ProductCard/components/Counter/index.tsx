'use client';

import { styles } from '@/helpers/styles';
import { ChangeEvent, FC, useState } from 'react';
import style from './index.module.scss';

export const Counter: FC = () => {
    const [value, setValue] = useState('');

    const handleDecrement = () => {
        const val = Number(value) - 1;

        setValue(String(val));
    };

    const handleIncrement = () => {
        const val = Number(value) + 1;

        setValue(String(val));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        setValue(val);
    };

    return (
        <div className={style.index}>
            <button
                className={styles(style.button, style.buttonLeft)}
                onClick={handleDecrement}
                type="button"
            >
                -
            </button>
            <input
                className={style.input}
                onChange={handleChange}
                type="text"
                value={value}
            />
            <button
                className={styles(style.button, style.buttonRight)}
                onClick={handleIncrement}
                type="button"
            >
                +
            </button>
        </div>
    );
};
