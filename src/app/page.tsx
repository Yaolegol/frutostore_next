import { Home } from '@/modules/pages/Home';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Fruits store',
};

const HomePage: NextPage = async () => {
    return <Home />;
};

export default HomePage;
