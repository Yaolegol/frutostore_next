'use client';

import { LINKEDIN, TELEGRAM, VK } from '@/constants';
import { FC } from 'react';
import style from './index.module.scss';

export const SocialNetworks: FC = () => {
    return (
        <div className={style.index}>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <img
                    alt="LinkedIn"
                    className={style.image}
                    src="/images/social/ln.png"
                />
            </a>
            <a href={VK} target="_blank" rel="noopener noreferrer">
                <img
                    alt="Vk"
                    className={style.image}
                    src="/images/social/vk.svg"
                />
            </a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                <img
                    alt="Telegram"
                    className={style.image}
                    src="/images/social/telegram.svg"
                />
            </a>
        </div>
    );
};
