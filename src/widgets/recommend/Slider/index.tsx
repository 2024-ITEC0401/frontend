import React, { useRef } from "react";

import { css } from "@emotion/react";

import * as Styles from "./index.style";
import ArrowButton from "@/components/forms/Button/ArrowButton/index";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperProps } from "swiper/types";

export interface SliderProps<T> {
    variant: "primary" | "secondary";
    sliderItems: T[];
    slidersPerView?: number;
    Component: React.ElementType;
}

export const Slider = <T,>({ variant, sliderItems, slidersPerView = 5, Component }: SliderProps<T>) => {
    const swiperRef = useRef<SwiperProps | null>(null);

    const handleSlideChange = (swiper: SwiperProps) => {
        if (swiperRef.current) {
            const currentIndex = swiper.activeIndex;
            swiperRef.current.slideTo(currentIndex);
        }
    };

    return (
        <Styles.SliderWrapper variant={variant}>
            <ArrowButton
                direction="left"
                onClick={() => {
                    if (swiperRef.current) {
                        swiperRef.current.slidePrev();
                    }
                }}
            />

            <Swiper
                css={css`
                    max-width: 90%;
                `}
                modules={[Navigation]}
                autoplay={true}
                spaceBetween={20}
                slidesPerView={slidersPerView}
                allowTouchMove={false}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Component {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <ArrowButton
                direction="right"
                onClick={() => {
                    if (swiperRef.current) {
                        swiperRef.current.slideNext();
                    }
                }}
            />
        </Styles.SliderWrapper>
    );
};
