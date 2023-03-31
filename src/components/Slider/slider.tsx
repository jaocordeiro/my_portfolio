'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <div className="container mx-auto">
      <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
        {children}
      </Swiper>
    </div>
  );
}
