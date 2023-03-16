import Link from 'next/link';
import CodeIcon from '@/components/Svgs/Code';
import LinkedinIcon from '@/components/Svgs/Linkedin';
import GitHub from '@/components/Svgs/GitHub';

export const Header = () => {
  return (
    <header className="w-full h-20 xl:h-24 bg-mpBlackHeader px-7 md:px-16 xl:px-36 flex">
      <div className="w-full flex items-center ">
        <div className="flex items-center">
          <CodeIcon className="w-10 h-10 xl:w-14 xl:h-14" fill="#ffffff" />
          <p className="text-white pl-4 text-xl font-bold max-md:hidden">CODE</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="pr-4 xl:pr-7">
          <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-cordeiro-de-almeida-6033b9147/" target="_blank">
            <LinkedinIcon className="w-7 h-7 xl:w-10 xl:h-10" />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/jaocordeiro" target="_blank">
            <GitHub className="w-7 h-7 xl:w-10 xl:h-10" />
          </Link>
        </div>
      </div>
    </header>
  );
};