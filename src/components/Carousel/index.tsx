'use client';
import mock from './mock';

export const Slider = () => {
  return (
    <div className="flex gap-x-5">
      {mock().map((image: { srcImg: string; altText: string }) => (
        <div key={image.altText}>
          <img className="w-14" src={image.srcImg} alt={image.altText} />
        </div>
      ))}
    </div>
  );
};
