import Link from 'next/link';

export const metadata = {
  title: 'Favorite Cities',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <Link href="/">Homepage</Link> |{' '}
          <Link href="/search">Search</Link> |{' '}
          <Link href="/city">City</Link> |{' '}
          <Link href="/favorites">Favorites</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
