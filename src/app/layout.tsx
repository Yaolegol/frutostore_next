import { getServerLangData } from '@/helpers/lang/server';
import { ModalProvider } from '@/modules/Modal/provider';
import { CartProvider } from '@/modules/Cart/provider';
import { Layout } from '@/modules/Layout/components/Layout';
import { LangContextProvider } from '@/modules/Lang/provider';
import { ReactNode } from 'react';
import '@/styles/index.scss';

interface IProps {
    children: ReactNode;
}

const RootLayout = async ({ children }: IProps) => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();

    return (
        <html lang={defaultLangOption.value}>
            <LangContextProvider
                defaultLangOption={defaultLangOption}
                defaultLangText={defaultLangText}
            >
                <ModalProvider>
                    <CartProvider>
                        <Layout>{children}</Layout>
                    </CartProvider>
                </ModalProvider>
            </LangContextProvider>
        </html>
    );
};

export default RootLayout;
