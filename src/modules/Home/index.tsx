import { Contacts } from '@/modules/Home/components/Contacts';
import { Description } from '@/modules/Home/components/Description';
import { Photo } from '@/modules/Home/components/Photo';
import { SocialNetworks } from '@/modules/Home/components/SocialNetworks';
import { Tabs } from '@/modules/Home/components/Tabs';
import { TabsContent } from '@/modules/Home/components/TabsContent';
import { Title } from '@/modules/Home/components/Title';
import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.photoContainer}>
                <Photo />
            </div>
            <div className={style.container}>
                <SelectLang />
            </div>
            <div className={style.container}>
                <Title />
            </div>
            <div className={style.container}>
                <div className={style.description}>
                    <Description />
                </div>
            </div>
            <div className={style.container}>
                <Contacts />
            </div>
            <div className={style.containerSocial}>
                <SocialNetworks />
            </div>
            <div className={style.container}>
                <Tabs />
            </div>
            <div className={style.container}>
                <TabsContent />
            </div>
        </div>
    );
};
