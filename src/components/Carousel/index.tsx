'use client';
import { Carousel } from 'react-responsive-carousel';
import mock from './mock';

export const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src="" />
        <p className="legend"></p>
      </div>
      <div>
        <img src="" />
        <p className="legend">Le</p>
      </div>
      <div>
        <img src="" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};
