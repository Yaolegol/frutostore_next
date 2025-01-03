import { Checkbox } from '@/components/Checkbox';
import { IFilterOption } from '@/modules/Filters/types';
import {
    FC,
    useCallback,
    ChangeEvent,
    useState,
    useEffect,
    useContext,
} from 'react';
import style from './index.module.scss';
import { LangContext } from '@/modules/Lang/context';
import { getMessage } from '@/modules/Lang/helpers';

interface IProps {
    code: string;
    onChange: (isChecked: boolean, valueCode: string) => void;
    options: IFilterOption[];
    title: string;
}

export const CheckboxFilter: FC<IProps> = ({ onChange, options, title }) => {
    const { langText } = useContext(LangContext);
    const [checkedCode, setCheckedCode] = useState('');

    const handleChange = useCallback(
        (valueCode: string) => (e: ChangeEvent<HTMLInputElement>) => {
            const isChecked = e.target.checked;

            onChange(isChecked, valueCode);

            if (!isChecked) {
                setCheckedCode('');

                return;
            }

            setCheckedCode(valueCode);
        },
        [onChange],
    );

    useEffect(() => {
        const checkedOption = options.find(
            ({ isDefaultChecked }) => isDefaultChecked,
        );

        if (!checkedOption) {
            setCheckedCode('');

            return;
        }

        setCheckedCode(checkedOption.valueCode);
    }, [options]);

    return (
        <div>
            <div>{title}</div>
            <div className={style.options}>
                {options.map(({ text, valueCode }) => {
                    return (
                        <div className={style.option} key={valueCode}>
                            <Checkbox
                                isChecked={checkedCode === valueCode}
                                onChange={handleChange(valueCode)}
                                text={getMessage(text, langText)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
