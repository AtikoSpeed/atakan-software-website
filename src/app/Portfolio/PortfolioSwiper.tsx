/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default function PortfolioSwiper() {
  return (
    <div className="h-[60vh] w-[20vw] select-none">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full h-full"
      >
        <SwiperSlide className="rounded-lg ">
          <img
            src="https://atakan.ninja/images/propic-full.jpg"
            alt="slide"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg ">
          <img
            src="https://atakan.ninja/images/propic-full.jpg"
            alt="slide"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg ">
          <img
            src="https://atakan.ninja/images/propic-full.jpg"
            alt="slide"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg ">
          <img
            src="https://atakan.ninja/images/propic-full.jpg"
            alt="slide"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
