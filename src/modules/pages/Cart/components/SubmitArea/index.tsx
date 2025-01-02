'use client';

import { FieldInput } from '@/modules/Form/components/FieldInput';
import { FC } from 'react';
import style from './index.module.scss';

export const SubmitArea: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>Оформить</div>
            <div className={style.content}>
                <div className={style.container}>
                    <FieldInput placeholder="E-mail" />
                </div>
                <div className={style.container}>
                    <FieldInput placeholder="Имя" />
                </div>
                <div className={style.container}>
                    <button className={style.button}>Отправить</button>
                </div>
            </div>
        </div>
    );
};
