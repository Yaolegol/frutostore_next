'use client';

import { FieldInput } from '@/modules/Form/components/FieldInput';
import { FORM_ERRORS } from '@/modules/Form/constants';
import { MODAL_NAMES } from '@/modules/Modal/constants';
import { ModalContext } from '@/modules/Modal/context';
import { EMAIL_REGEXP } from '@/regexp';
import { ChangeEvent, FC, useCallback, useContext, useState } from 'react';
import style from './index.module.scss';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { LangContext } from '@/modules/Lang/context';
import { getMessage } from '@/modules/Lang/helpers';

const INITIAL_FIELDS_STATE = {
    email: {
        error: '',
        isDirty: false,
        isValid: false,
        value: '',
    },
    name: {
        error: '',
        isDirty: false,
        isValid: false,
        value: '',
    },
};

const { ENTER_EMAIL, ENTER_NAME } = FORM_ERRORS;

export const SubmitArea: FC = () => {
    const { langText } = useContext(LangContext);
    const { modalShow } = useContext(ModalContext);

    const [fieldsState, setFieldsState] = useState(INITIAL_FIELDS_STATE);
    const { email, name } = fieldsState;

    const handleSubmit = useCallback(() => {
        const isNotValid = Object.values(fieldsState).some(
            ({ isValid }) => !isValid,
        );

        if (isNotValid) {
            const { email, name } = fieldsState;

            setFieldsState({
                ...fieldsState,
                email: {
                    ...email,
                    error: ENTER_EMAIL,
                    isDirty: true,
                },
                name: {
                    ...name,
                    error: ENTER_NAME,
                    isDirty: true,
                },
            });

            return;
        }

        modalShow?.(MODAL_NAMES.CHECKOUT_SUCCESS);
    }, [fieldsState, modalShow]);

    const handleBlurEmail = useCallback(() => {
        const { email } = fieldsState;
        const isValid = EMAIL_REGEXP.test(email.value);

        setFieldsState({
            ...fieldsState,
            email: {
                ...email,
                error: !isValid ? ENTER_EMAIL : '',
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
                error: !isValid ? ENTER_NAME : '',
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
                    isDirty: true,
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
                    isDirty: true,
                    isValid: true,
                    value: e.target.value,
                },
            });
        },
        [fieldsState],
    );

    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="cart.submit" />
            </div>
            <div className={style.content}>
                <div className={style.container}>
                    <FieldInput
                        error={email.error}
                        isValid={!email.isDirty || email.isValid}
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
                        isValid={!name.isDirty || name.isValid}
                        name="name"
                        onBlur={handleBlurName}
                        onChange={handleChangeName}
                        placeholder={getMessage('common.name.title', langText)}
                        value={name.value}
                    />
                </div>
                <div className={style.container}>
                    <button className={style.button} onClick={handleSubmit}>
                        <IntlMessage id="cart.submit.button" />
                    </button>
                </div>
            </div>
        </div>
    );
};
