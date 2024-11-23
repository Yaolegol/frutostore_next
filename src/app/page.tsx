import { getServerLangData } from '@/helpers/lang/server';
import { Home } from '@/modules/Home';
import { LangContextProvider } from '@/modules/Lang/provider';
import { Layout } from '@/modules/Layout/components/Layout';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Oleg Oleinik',
};

const HomePage: NextPage = async () => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();

    return (
        <LangContextProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <Layout>
                <Home />
            </Layout>
        </LangContextProvider>
    );
};

export default HomePage;
