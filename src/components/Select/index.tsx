import { Icon } from '@/components/Icon';
import { styles } from '@/helpers/styles';
import { FC, FocusEvent, useCallback, useMemo, useRef, useState } from 'react';
import style from './index.module.scss';

export interface IOption {
    label: string;
    value: string;
}

interface IProps {
    defaultSelectedOptionIndex?: number;
    onSelect: (option: IOption) => void;
    options: IOption[];
}

export const Select: FC<IProps> = ({
    defaultSelectedOptionIndex = 0,
    onSelect,
    options,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(
        options[defaultSelectedOptionIndex],
    );

    const handleBlur = (e: FocusEvent<HTMLButtonElement>) => {
        if (ref.current?.contains(e.relatedTarget)) {
            return;
        }

        setIsOpen(false);
    };

    const handleClick = () => {
        setIsOpen((_isOpen) => !_isOpen);
    };

    const handleOptionClick = useCallback(
        (option: IOption) => {
            return () => {
                setSelectedValue(option);
                setIsOpen(false);
                onSelect(option);
            };
        },
        [onSelect],
    );

    const _options = useMemo(() => {
        return options.map((option) => {
            const { label, value } = option;

            return (
                <button
                    className={style.optionButton}
                    key={value}
                    onClick={handleOptionClick(option)}
                    type="button"
                >
                    {label}
                </button>
            );
        });
    }, [handleOptionClick, options]);

    return (
        <div
            className={styles(style.index, isOpen ? style.open : '')}
            ref={ref}
        >
            <button
                className={style.buttonOpen}
                onClick={handleClick}
                onBlur={handleBlur}
                type="button"
            >
                {selectedValue.label}
                <Icon className={style.iconArrow} name="arrow" />
            </button>
            <div className={style.contentArea}>{_options}</div>
        </div>
    );
};
