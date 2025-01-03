import { Input } from '@/components/Input';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { ChangeEvent, FC, FocusEvent } from 'react';
import style from './index.module.scss';

interface IProps {
    error?: string;
    isValid?: boolean;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder: string;
    value: string;
}

export const FieldInput: FC<IProps> = ({
    error = '',
    isValid = true,
    name,
    onBlur,
    onChange,
    placeholder,
    value,
}) => {
    return (
        <div className={!isValid ? style.notValid : ''}>
            <div className={style.inputContainer}>
                <Input
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                />
            </div>
            <div className={style.error}>
                <IntlMessage id={error} />
            </div>
        </div>
    );
};
