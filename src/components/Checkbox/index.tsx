import { Icon } from '@/components/Icon';
import { styles } from '@/helpers/styles';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import style from './index.module.scss';

interface IProps {
    isDefaultChecked?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    text: string;
}

export const Checkbox: FC<IProps> = ({ isDefaultChecked, onChange, text }) => {
    const [defaultChecked, setDefaultChecked] = useState(isDefaultChecked);
    const [checked, setChecked] = useState(isDefaultChecked);

    useEffect(() => {
        if (isDefaultChecked === defaultChecked) {
            return;
        }

        setDefaultChecked(isDefaultChecked);
        setChecked(isDefaultChecked);
    }, [defaultChecked, isDefaultChecked]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked((isChecked) => !isChecked);
        onChange(e);
    };

    return (
        <label className={styles(style.index, checked ? style.checked : '')}>
            <input
                checked={checked}
                className={style.input}
                onChange={handleChange}
                type="checkbox"
            />
            <div className={style.checkmarkContainer}>
                <Icon className={style.checkmarkIcon} name="checkmark" />
            </div>
            <div className={style.text}>{text}</div>
        </label>
    );
};
