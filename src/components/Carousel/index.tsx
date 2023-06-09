import { Slider, Slide, SliderProps } from '@/components/Slider';
import mock from './mock';

export function Carousel() {
  const settings: SliderProps = {
    slidesPerView: 5,
    autoplay: { delay: 2500 },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <Slider settings={settings}>
      {mock().map((image: { srcImg: string; altText: string }) => (
        <Slide className="flex justify-center items-center cursor-grab" key={image.altText}>
          <img
            className="cursor-grabbing w-20 h-20 md:w-16 md:h-16"
            src={image.srcImg}
            alt={image.altText}
          />
        </Slide>
      ))}
    </Slider>
  );
}
