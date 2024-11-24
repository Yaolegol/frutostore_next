import { SliderButton } from '@/components/Button';
import { FC, useCallback, useEffect, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import style from './index.module.scss';

interface IProps {
    swiper?: SwiperClass;
}

export const SliderPrevButton: FC<IProps> = ({ swiper }) => {
    const [isBeginning, setIsBeginning] = useState(true);

    useEffect(() => {
        swiper?.on('slideChange', (sw) => {
            setIsBeginning(sw.isBeginning);
        });

        return () => {
            swiper?.off('slideChange');
        };
    }, [swiper]);

    const handleNext = useCallback(() => {
        swiper?.slidePrev();
    }, [swiper]);

    return (
        <SliderButton
            className={style.index}
            disabled={isBeginning}
            onClick={handleNext}
        />
    );
};
