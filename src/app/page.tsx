'use client';
import { Header } from '@/components/Header';
import { Write } from '@/components/TypeWriter';
import { Carousel } from '@/components/Carousel';
import { Accordion } from '@/components/Accordion';

export default function Home() {
  return (
    <div>
      <div className="bg-mpBlack h-screen">
        <Header />
        <section className="flex justify-center h-screen">
          <Write />
        </section>
      </div>
      <Carousel />

      <Accordion />
    </div>
  );
}
