import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';

export const Copyright: FC = () => {
    return (
        <div>
            © <IntlMessage id="footer.copyright" />
        </div>
    );
};
