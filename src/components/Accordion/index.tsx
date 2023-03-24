'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type SetState = {
  id: string;
  html_url: string;
  name: string;
  language: string;
};

export function Accordion() {
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

  console.log('repos', repos);

  return (
    <section className="w-full h-[500px] bg-mpBlack pt-7">
      <div className="container mx-auto grid sm:grid-cols-1 sm:text-center md:grid-cols-3 gap-y-2.5 gap-x-2.5 px-0">
        {repos.map((item) => {
          return (
            <div key={item.id} className="">
              <Link
                href={item.html_url}
                target="_blank"
                className="text-mpDarkGrey font-bold text-lg"
              >
                {item.name}
                <p className="text-mpGrey text-sm">
                  {item.language ? item.language : 'TypeScript'}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
