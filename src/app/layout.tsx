import { getServerLangData } from '@/helpers/lang/server';
import { LayoutProvider } from '@/modules/Layout/provider';
import { ReactNode } from 'react';
import '@/styles/index.scss';

interface IProps {
    children: ReactNode;
}

const RootLayout = async ({ children }: IProps) => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();

    return (
        <html lang={defaultLangOption.value}>
            <head>
                <link rel="icon" href="/favicon.svg" />
            </head>
            <LayoutProvider
                defaultLangOption={defaultLangOption}
                defaultLangText={defaultLangText}
            >
                {children}
            </LayoutProvider>
        </html>
    );
};

export default RootLayout;
