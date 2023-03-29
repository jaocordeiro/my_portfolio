'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import UpArrowIcon from '@/components/Svgs/UpArrow';
import DownArrowIcon from '@/components/Svgs/DownArrow';

export function Accordion({ specifyRepos, outhersRepos }: any) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="w-full h-full bg-mpBlack pt-16 pb-7">
      <p className="text-mpGrey text-center mb-14 text-2xl font-bold">Repositório</p>
      <div className="container mx-auto grid sm:grid-cols-1 text-center justify-items-center md:grid-cols-3 gap-y-4 gap-x-2.5 px-0">
        {specifyRepos.map(
          (repos: { id: number; html_url: string; name: string; language: string }) => {
            return (
              <Link
                key={repos.id}
                href={repos.html_url}
                target="_blank"
                className="text-mpDarkGrey py-1 px-1 font-bold text-lg grid justify-center items-center w-4/5 h-24 bg-mpLightBlack border-solid border-2 border-mpBlackHeader"
              >
                <p>{repos.name}</p>
                <p className="text-mpGrey text-sm">
                  {repos.language ? repos.language : 'TypeScript'}
                </p>
              </Link>
            );
          },
        )}
      </div>
      <div onClick={() => setOpen(!open)} className="h-7 w-full flex justify-center pt-6">
        <button className="text-white cursor-pointer">
          {open ? <UpArrowIcon className="w-6" /> : <DownArrowIcon className="w-6" />}
        </button>
      </div>
      <Collapse isOpened={open} open={open}>
        <div className="grid md:grid-cols-3 text-center justify-items-center pt-11 gap-y-4 gap-x-2.5">
          {outhersRepos.map(
            (item: { id: number; html_url: string; name: string; language: string }) => {
              return (
                <Link
                  key={item.id}
                  href={item.html_url}
                  target="_blank"
                  className="text-mpDarkGrey py-1 px-1 font-bold text-lg grid justify-center items-center w-4/5 h-24 bg-mpLightBlack border-solid border-2 border-mpBlackHeader"
                >
                  <p>{item.name}</p>
                  <p className="text-mpGrey text-sm">
                    {item.language ? item.language : 'TypeScript'}
                  </p>
                </Link>
              );
            },
          )}
        </div>
      </Collapse>
    </section>
  );
}