import { IOption } from '@/components/Select';
import { CartProvider } from '@/modules/Cart/provider';
import { Layout } from '@/modules/Layout/components/Layout';
import { LangContextProvider } from '@/modules/Lang/provider';
import { FC, ReactNode } from 'react';

interface IProps {
    defaultLangOption: IOption;
    defaultLangText: any;
    children: ReactNode;
}

export const LayoutProvider: FC<IProps> = async ({
    defaultLangOption,
    defaultLangText,
    children,
}) => {
    return (
        <LangContextProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <CartProvider>
                <Layout>{children}</Layout>
            </CartProvider>
        </LangContextProvider>
    );
};
