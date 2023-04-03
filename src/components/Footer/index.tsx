import Link from 'next/link';

type FooterText = {
  text: string;
};
function Footer({ text }: FooterText) {
  return (
    <div className="flex h-20 xl:h-28 bg-mpLightBlack justify-center items-center">
      <Link href="https://github.com/jaocordeiro" target="_blank">
        <p className="cursor-pointer text-mpGrey text-sm xl:text-xl xl:font-bold font-semibold">
          {text}
        </p>
      </Link>
    </div>
  );
}

export default Footer;
