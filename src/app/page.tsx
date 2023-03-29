'use client';
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Write } from '@/components/TypeWriter';
import { Carousel } from '@/components/Carousel';
import { Accordion } from '@/components/Accordion';
import Footer from '@/components/Footer';

type SetState = {
  id: string;
  html_url: string;
  name: string;
  language: string;
};

export default function Home() {
  const [repos, setRepos] = useState<SetState[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/jaocordeiro/repos')
      .then((res: { json: () => any }) => res.json())
      .then((repos) => {
        setRepos(repos);
        setLoading(false);
      });
  }, []);

  const specifyRepos: SetState[] = repos.slice(0, 6);

  const outhersRepos: SetState[] = repos.slice(7);

  return (
    <div>
      <div className="bg-mpBlack h-screen">
        <Header />
        <section className="grid justify-center h-screen">
          <div className="h-52 pt-10 flex justify-center items-center">
            <img
              className="w-40 rounded-full grayscale"
              src="https://avatars.githubusercontent.com/u/56763936?v=4"
            />
          </div>
          <Write />
        </section>
      </div>
      <Carousel />

      <Accordion specifyRepos={specifyRepos} outhersRepos={outhersRepos} />

      <footer className="w-full">
        <Footer text="Feito com ❤️ por João Vitor" />
      </footer>
    </div>
  );
}
