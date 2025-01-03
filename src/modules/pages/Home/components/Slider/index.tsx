'use client';

import { Slide } from '@/modules/pages/Home/components/Slider/Slide';
import { SliderNextButton } from '@/modules/pages/Home/components/Slider/SliderNextButton';
import { SliderPrevButton } from '@/modules/pages/Home/components/Slider/SliderPrevButton';
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
                    <Slide alt="apple" src="/images/pages/home/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide alt="cherry" src="/images/pages/home/2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide alt="grapefruit" src="/images/pages/home/3.jpg" />
                </SwiperSlide>
            </Swiper>
            <SliderPrevButton swiper={swiper} />
            <SliderNextButton swiper={swiper} />
        </div>
    );
};
