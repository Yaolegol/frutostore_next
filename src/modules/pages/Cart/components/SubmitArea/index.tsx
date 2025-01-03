'use client';

import { FieldInput } from '@/modules/Form/components/FieldInput';
import { EMAIL_REGEXP } from '@/regexp';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import style from './index.module.scss';

const INITIAL_FIELDS_STATE = {
    email: {
        error: '',
        isValid: true,
        value: '',
    },
    name: {
        error: '',
        isValid: true,
        value: '',
    },
};

export const SubmitArea: FC = () => {
    const [fieldsState, setFieldsState] = useState(INITIAL_FIELDS_STATE);
    const { email, name } = fieldsState;

    const handleSubmit = useCallback(() => {
        const isNotValid = Object.values(fieldsState).some(
            ({ isValid }) => !isValid,
        );

        if (isNotValid) {
            return;
        }

        console.log('SUBMIT!');
    }, [fieldsState]);

    const handleBlurEmail = useCallback(() => {
        const { email } = fieldsState;
        const isValid = EMAIL_REGEXP.test(email.value);

        setFieldsState({
            ...fieldsState,
            email: {
                ...email,
                error: !isValid ? 'Введите корректный email' : '',
                isValid,
            },
        });
    }, [fieldsState]);

    const handleBlurName = useCallback(() => {
        const { name } = fieldsState;
        const isValid = Boolean(name.value);

        setFieldsState({
            ...fieldsState,
            name: {
                ...name,
                error: !isValid ? 'Введите имя' : '',
                isValid,
            },
        });
    }, [fieldsState]);

    const handleChangeEmail = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setFieldsState({
                ...fieldsState,
                email: {
                    error: '',
                    isValid: true,
                    value: e.target.value,
                },
            });
        },
        [fieldsState],
    );

    const handleChangeName = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setFieldsState({
                ...fieldsState,
                name: {
                    error: '',
                    isValid: true,
                    value: e.target.value,
                },
            });
        },
        [fieldsState],
    );

    return (
        <div className={style.index}>
            <div className={style.title}>Оформить</div>
            <div className={style.content}>
                <div className={style.container}>
                    <FieldInput
                        error={email.error}
                        isValid={email.isValid}
                        name="email"
                        onBlur={handleBlurEmail}
                        onChange={handleChangeEmail}
                        placeholder="E-mail"
                        value={email.value}
                    />
                </div>
                <div className={style.container}>
                    <FieldInput
                        error={name.error}
                        isValid={name.isValid}
                        name="name"
                        onBlur={handleBlurName}
                        onChange={handleChangeName}
                        placeholder="Имя"
                        value={name.value}
                    />
                </div>
                <div className={style.container}>
                    <button className={style.button} onClick={handleSubmit}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};
