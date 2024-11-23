import { SliderButton } from '@/components/Button';
import { FC, useCallback, useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import style from './index.module.scss';

export const SliderNextButton: FC = () => {
    const [isEnd, setIsEnd] = useState(false);
    const swiper = useSwiper();

    useEffect(() => {
        swiper.on('slideChange', (instance) => {
            console.log('instance.isEnd');
            console.log(instance.isEnd);

            setIsEnd(instance.isEnd);
        });

        return () => {
            swiper.off('slideChange');
        };
    }, [swiper]);

    const handleNext = useCallback(() => {
        swiper.slideNext();
    }, [swiper]);

    return (
        <SliderButton
            className={style.index}
            disabled={isEnd}
            onClick={handleNext}
        />
    );
};
