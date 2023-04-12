import { SVGProps } from 'react';

function ArrowDown({ className, fill }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill={fill} viewBox="0 0 24 24">
      <path d="M12 17.586L4.707 10.293 3.293 11.707 12 20.414 20.707 11.707 19.293 10.293 12 17.586z" />
      <path d="M20.707 5.707L19.293 4.293 12 11.586 4.707 4.293 3.293 5.707 12 14.414 20.707 5.707z" />
    </svg>
  );
}

export default ArrowDown;
