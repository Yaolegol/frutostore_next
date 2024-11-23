import { Icon } from '@/components/Icon';
import { styles } from '@/helpers/styles';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    className: string;
    disabled?: boolean;
    onClick: () => void;
}

export const SliderButton: FC<IProps> = ({ className, disabled, onClick }) => {
    return (
        <button
            className={styles(
                style.index,
                className,
                disabled ? style.disabled : '',
            )}
            onClick={onClick}
            type="button"
        >
            <Icon className={style.icon} name="arrow" />
        </button>
    );
};
