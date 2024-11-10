'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { Icon } from '@/components/Icon';
import { FC } from 'react';
import style from './index.module.scss';
import { styles } from '@/helpers/styles';

interface IProps {
    activeId?: number;
    icon: string;
    id: number;
    onClick: (id: number) => void;
    title: string;
}

export const Tab: FC<IProps> = ({ activeId, icon, id, onClick, title }) => {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <button
            className={styles(style.index, activeId === id ? style.active : '')}
            onClick={handleClick}
            type="button"
        >
            <Icon className={style.icon} name={icon} />
            <span className={style.title}>
                <IntlMessage id={title} />
            </span>
        </button>
    );
};
