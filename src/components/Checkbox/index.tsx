import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    text: string;
}

export const Checkbox: FC<IProps> = ({ text }) => {
    return (
        <label className={style.index}>
            <input className={style.input} type="checkbox" />
            <div className={style.checkmarkContainer}></div>
            <div className={style.text}>{text}</div>
        </label>
    );
};
