'use client';
import { Typewriter } from 'react-simple-typewriter';

export const Write = () => {
  return (
    <div className="pt-24 px-7 md:w-[400px]">
      <span className=" text-transparent bg-clip-text bg-gradient-to-r from-mpLightGray via-mpGrey to-mpDarkGrey font-bold text-3xl md:text-5xl leading-[3rem] md:leading-[4rem]">
        <Typewriter
          words={['Olá, sejá bem vindo ao meu portfólio.', 'Hello, welcome to my portfolio.']}
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
};
