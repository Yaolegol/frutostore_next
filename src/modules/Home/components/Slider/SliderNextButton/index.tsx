import { SliderButton } from '@/components/Button';
import { FC, useCallback, useEffect, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import style from './index.module.scss';

interface IProps {
    swiper?: SwiperClass;
}

export const SliderNextButton: FC<IProps> = ({ swiper }) => {
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        swiper?.on('slideChange', (sw) => {
            setIsEnd(sw.isEnd);
        });

        return () => {
            swiper?.off('slideChange');
        };
    }, [swiper]);

    const handleNext = useCallback(() => {
        swiper?.slideNext();
    }, [swiper]);

    return (
        <SliderButton
            className={style.index}
            disabled={isEnd}
            onClick={handleNext}
        />
    );
};
