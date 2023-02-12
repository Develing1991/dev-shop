import React, { useState } from "react";
import * as S from "./SliderImage.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
export default function SliderImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  return (
    <S.SliderImage>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-main"
      >
        {Array(10)
          .fill(1)
          .map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={`https://swiperjs.com/demos/images/nature-${
                    index + 1
                  }.jpg`}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="thumbs">
        <S.PrevIcon className="swiper-prev">prev</S.PrevIcon>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3.3}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="swiper-thumbs"
        >
          {Array(10)
            .fill(1)
            .map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${
                      index + 1
                    }.jpg`}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <S.NextIcon className="swiper-next">next</S.NextIcon>
      </div>
    </S.SliderImage>
  );
}
