import { Header } from '@/components/Header';
import { Write } from '@/components/TypeWriter';

export default function Home() {
  return (
    <div className="bg-mpBlack w-screen h-screen">
      <Header />
      <section className="w-screen flex justify-center">
        <Write />
      </section>
    </div>
  );
}
