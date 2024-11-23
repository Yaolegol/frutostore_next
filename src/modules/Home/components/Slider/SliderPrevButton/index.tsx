import { SliderButton } from '@/components/Button';
import { FC, useCallback, useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import style from './index.module.scss';

export const SliderPrevButton: FC = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const swiper = useSwiper();

    useEffect(() => {
        swiper.on('slideChange', (instance) => {
            setIsBeginning(instance.isBeginning);
        });

        return () => {
            swiper.off('slideChange');
        };
    }, [swiper]);

    const handleNext = useCallback(() => {
        swiper.slidePrev();
    }, [swiper]);

    return (
        <SliderButton
            className={style.index}
            disabled={isBeginning}
            onClick={handleNext}
        />
    );
};
