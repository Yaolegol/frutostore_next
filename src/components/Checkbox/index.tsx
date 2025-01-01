import { Icon } from '@/components/Icon';
import { ChangeEvent, FC } from 'react';
import style from './index.module.scss';

interface IProps {
    isChecked?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    text: string;
}

export const Checkbox: FC<IProps> = ({ isChecked, onChange, text }) => {
    return (
        <label className={style.index}>
            <input
                checked={isChecked}
                className={style.input}
                onChange={onChange}
                type="checkbox"
            />
            <div className={style.checkmarkContainer}>
                <Icon className={style.checkmarkIcon} name="checkmark" />
            </div>
            <div className={style.text}>{text}</div>
        </label>
    );
};
