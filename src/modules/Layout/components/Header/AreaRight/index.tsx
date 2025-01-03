import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { CartLink } from '@/modules/Layout/components/Header/CartLink';
import { FC } from 'react';
import style from './index.module.scss';

export const AreaRight: FC = () => {
    return (
        <div className={style.index}>
            <SelectLang />
            <CartLink />
        </div>
    );
};
