import './globals.css';

export const metadata = {
  title: 'João Developer',
  description: 'My Portfolio',
  icons: {
    icon: 'assets/coding.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
