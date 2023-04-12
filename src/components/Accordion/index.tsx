'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Collapse } from 'react-collapse';
import ArrowDown from '@/components/Svgs/ArrowDown';
import ArrowUp from '@/components//Svgs/ArrowUp';

export function Accordion({ specifyRepos, outhersRepos }: any) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <p className="text-mpGrey text-center mb-16 md:pt-8 xl:pt-16 text-2xl font-bold">
        Repositório
      </p>
      <div className="container mx-auto grid sm:grid-cols-1 text-center justify-items-center md:grid-cols-3 gap-y-4 gap-x-2.5 px-0">
        {specifyRepos.map(
          (repos: { id: number; html_url: string; name: string; language: string }) => (
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
          ),
        )}
      </div>
      <div className="pt-6 pb-12 h-10 w-full flex justify-center">
        <div aria-hidden="true" onClick={() => setOpen(!open)}>
          {!open ? (
            <button type="button" aria-label="Arrow Down">
              <ArrowDown className="w-8 animate-bounce" fill="#9e9e9e" />
            </button>
          ) : (
            <button type="button" aria-label="Arrow Up">
              <ArrowUp className="w-8 animate-bounce" fill="#9e9e9e" />
            </button>
          )}
        </div>
      </div>
      <Collapse isOpened={open} open={open}>
        <div className="container mx-auto grid sm:grid-cols-1 text-center justify-items-center md:grid-cols-3 gap-y-4 gap-x-2.5 px-0 pt-2">
          {outhersRepos.map(
            (item: { id: number; html_url: string; name: string; language: string }) => (
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
            ),
          )}
        </div>
      </Collapse>
    </>
  );
}
