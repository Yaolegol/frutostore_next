'use client';

import { Slide } from '@/modules/Home/components/Slider/Slide';
import { SliderNextButton } from '@/modules/Home/components/Slider/SliderNextButton';
import { SliderPrevButton } from '@/modules/Home/components/Slider/SliderPrevButton';
import { FC, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './index.module.scss';

export const Slider: FC = () => {
    const [swiper, setSwiper] = useState<SwiperClass>();

    return (
        <div className={style.index}>
            <Swiper onSwiper={setSwiper}>
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
            <SliderPrevButton swiper={swiper} />
            <SliderNextButton swiper={swiper} />
        </div>
    );
};
