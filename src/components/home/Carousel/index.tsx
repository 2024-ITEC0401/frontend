import React, { useRef } from "react";

import { css } from "@emotion/react";

import ArrowButton from "@/components/forms/Button/ArrowButton/index";

import * as Styles from "./index.style";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperProps } from "swiper/types";

export interface CarouselProps {
    carouselImgs: string[];
    children?: React.ReactNode;
}

export const Carousel = ({ carouselImgs, children }: CarouselProps) => {
    const swiperRef = useRef<SwiperProps | null>(null);

    const handleSlideChange = (swiper: SwiperProps) => {
        if (swiperRef.current) {
            const currentIndex = swiper.activeIndex;
            swiperRef.current.slideTo(currentIndex);
        }
    };

    return (
        <Styles.CarouselWrapper>
            <Styles.LeftArrowWrapper>
                <ArrowButton
                    direction="left"
                    onClick={() => {
                        if (swiperRef.current) {
                            swiperRef.current.slidePrev();
                        }
                    }}
                ></ArrowButton>
            </Styles.LeftArrowWrapper>
            <Swiper
                css={css`
                    border-radius: 12px;
                `}
                modules={[Navigation]}
                autoplay={true}
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={false}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                {carouselImgs.map((imgSrc, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Styles.CarouselItem src={imgSrc}></Styles.CarouselItem>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Styles.RightArrowWrapper>
                <ArrowButton
                    direction="right"
                    onClick={() => {
                        if (swiperRef.current) {
                            swiperRef.current.slideNext();
                        }
                    }}
                ></ArrowButton>
            </Styles.RightArrowWrapper>
            {children && <Styles.ChildrenWrapper>{children}</Styles.ChildrenWrapper>}
        </Styles.CarouselWrapper>
    );
};
