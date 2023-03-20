import { Header } from '@/components/Header';
import { Write } from '@/components/TypeWriter';
import { Slider } from '@/components/Carousel';

export default function Home() {
  return (
    <div className="bg-mpBlack w-screen h-screen">
      <Header />
      <section className="w-screen flex justify-center h-screen">
        <Write />
      </section>
      <section className="w-screen flex justify-center">
        <Slider />
      </section>
    </div>
  );
}
