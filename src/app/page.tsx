import { getServerLangData } from '@/helpers/lang/server';
import { LayoutProvider } from '@/modules/Layout/provider';
import { Home } from '@/modules/pages/Home';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store',
};

const HomePage: NextPage = async () => {
    const { defaultLangOption, defaultLangText } = await getServerLangData();

    return (
        <LayoutProvider
            defaultLangOption={defaultLangOption}
            defaultLangText={defaultLangText}
        >
            <Home />
        </LayoutProvider>
    );
};

export default HomePage;
