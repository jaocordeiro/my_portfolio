'use client';
import { Header } from '@/components/Header';
import { Write } from '@/components/TypeWriter';
import { Carousel } from '@/components/Carousel';
import { Accordion } from '@/components/Accordion';
import { useEffect, useState } from 'react';

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
        <section className="flex justify-center h-screen">
          <Write />
        </section>
      </div>
      <Carousel />

      <Accordion specifyRepos={specifyRepos} outhersRepos={outhersRepos} />
    </div>
  );
}
