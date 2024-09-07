import './globals.css';

export const metadata = {
  title: 'East Coast Gamers',
  description: 'East Coast Gamers Website'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
