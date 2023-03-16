import Link from 'next/link';
import CodeIcon from '@/components/Svgs/Code';
import LinkedinIcon from '@/components/Svgs/Linkedin';
import GitHub from '@/components/Svgs/GitHub';

export const Header = () => {
  return (
    <header className="w-full h-20 bg-mpBlackHeader px-5 flex">
      <div className="w-full flex items-center ">
        <div className="">
          <CodeIcon width={40} height={40} fill="#ffffff" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="pr-4">
          <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-cordeiro-de-almeida-6033b9147/" target="_blank">
            <LinkedinIcon className="w-7 h-7" />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/jaocordeiro" target="_blank">
            <GitHub className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </header>
  );
};
