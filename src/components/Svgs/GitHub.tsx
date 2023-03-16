import { SVGProps } from 'react';

function GitHub({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#2100c4"
        d="M24 4C12.954 4 4 12.954 4 24c0 8.887 5.801 16.411 13.82 19.016h12.36C38.199 40.411 44 32.887 44 24c0-11.046-8.954-20-20-20z"
      />
      <path
        fill="#ddbaff"
        d="M37 23.5c0-2.897-.875-4.966-2.355-6.424.946-1.682-.306-5.076-.306-5.076-2.5.5-4.367 1.5-5.609 2.376C27.262 14.115 25.671 14 24 14c-1.71 0-3.339.118-4.834.393-1.242-.879-3.115-1.889-5.632-2.393 0 0-1.284 3.492-.255 5.146C11.843 18.6 11 20.651 11 23.5c0 6.122 3.879 8.578 9.209 9.274C19.466 33.647 19 34.764 19 36v.305a3.763 3.763 0 01-.514.108c-1.107.143-2.271 0-2.833-.333-.562-.333-1.229-1.083-1.729-1.813-.422-.616-1.263-2.032-3.416-1.979a.487.487 0 00-.5.563c.043.194.213.5.896.75.685.251 1.063.854 1.438 1.458.418.674.417 2.468 2.562 3.416 1.53.677 2.988.594 4.097.327l.001 3.199c0 .639-.585 1.125-1.191 1.013 1.944.654 4.022.986 6.189.986 2.166 0 4.243-.332 6.19-.984-.606.111-1.19-.375-1.19-1.014V36c0-1.236-.466-2.353-1.209-3.226C33.121 32.078 37 29.622 37 23.5z"
      />
      <path
        fill="#ddbaff"
        d="M15 18l3.838-1.279c1.01-.337 1.231-1.684.365-2.302l-.037-.026c-2.399.44-4.445 1.291-5.888 2.753.318.512.851.854 1.722.854zM28.693 14.402c-.878.623-.655 1.987.366 2.327L32.872 18c.913 0 1.461-.37 1.773-.924-1.46-1.438-3.513-2.274-5.915-2.701a1.186 1.186 0 00-.037.027zM24 31c-1.525 0-2.874.697-3.791 1.774 1.2.157 2.472.226 3.791.226s2.591-.069 3.791-.226C26.874 31.697 25.525 31 24 31z"
      />
    </svg>
  );
}

export default GitHub;