'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';

export const Empty: FC = () => {
    return (
        <div>
            <IntlMessage id="cart.empty.message.title" />
        </div>
    );
};
