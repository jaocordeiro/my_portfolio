'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import Image from 'next/image';

export function Accordion({ specifyRepos, outhersRepos }: any) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <p className="text-mpGrey text-center mb-20 text-2xl font-bold">Repositório</p>
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
      <div
        onClick={() => setOpen(!open)}
        aria-hidden="true"
        className="h-7 w-full flex justify-center py-8"
      >
        <button className="text-white cursor-pointer">
          {open ? (
            <Image
              className="w-6"
              src="/assets/arrowup.png"
              alt="Arrow Up"
              width={24}
              height={24}
            />
          ) : (
            <Image
              className="w-6"
              src="/assets/arrowdown.png"
              alt="Arrow Down"
              width={24}
              height={24}
            />
          )}
        </button>
      </div>
      <Collapse isOpened={open} open={open}>
        <div className="container mx-auto grid sm:grid-cols-1 text-center justify-items-center md:grid-cols-3 gap-y-4 gap-x-2.5 px-0 pt-4">
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
