'use client';

import { Typewriter } from 'react-simple-typewriter';

export function Write() {
  return (
    <div className="px-7 h-64 -mt-32 md:mt-0 md:w-[600px] md:h-[400px]">
      <span className=" text-transparent bg-clip-text bg-gradient-to-r from-mpLightGray via-mpGrey to-mpDarkGrey font-bold text-3xl md:text-5xl leading-[3rem] md:leading-[4rem]">
        <Typewriter
          words={[
            'Olá, seja bem vindo ao meu portfolio, conheça um pouco mais minhas habilidades.',
            'Hello, welcome to my portfolio, get to know a little more about my skills.',
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
}
