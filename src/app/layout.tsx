import '@/styles/index.scss';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

const RootLayout = ({ children }: IProps) => {
    return <html lang="en">{children}</html>;
};

export default RootLayout;
