import { SVGProps } from 'react';

function ArrowUp({ className, fill }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill={fill} viewBox="0 0 24 24">
      <path d="M12 6.414L19.293 13.707 20.707 12.293 12 3.586 3.293 12.293 4.707 13.707 12 6.414z" />
      <path d="M3.293 18.293L4.707 19.707 12 12.414 19.293 19.707 20.707 18.293 12 9.586 3.293 18.293z" />
    </svg>
  );
}

export default ArrowUp;
