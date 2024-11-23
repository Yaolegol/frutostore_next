'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './index.module.scss';
import { Slide } from '@/modules/Home/components/Slider/Slide';

export const Slider: FC = () => {
    return (
        <div className={style.index}>
            <Swiper>
                <SwiperSlide>
                    <Slide alt="apple" src="/images/pages/home/apple.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide alt="cherry" src="/images/pages/home/cherry.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        alt="grapefruit"
                        src="/images/pages/home/grapefruit.jpg"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
