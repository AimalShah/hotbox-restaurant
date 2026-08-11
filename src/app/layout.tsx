import type { Metadata, Viewport } from 'next';
import { Modak, Mouse_Memoirs, Rubik } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Preloader } from '@/components/preloader';
import { Providers } from '@/components/providers';
import { WHATSAPP_URL } from '@/data/hotbox';
import { FaWhatsapp } from 'react-icons/fa';

import './globals.css';

const mouseMemoirs = Mouse_Memoirs({
  weight: '400',
  subsets: ['latin'],
  variable: '--app-font-display',
  display: 'swap',
});

const modak = Modak({
  weight: '400',
  subsets: ['latin'],
  variable: '--app-font-sans',
  display: 'swap',
});

const rubik = Rubik({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--app-font-text',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HOTBOX Restaurant',
  description:
    'HOTBOX Restaurant — a family restaurant in Charbagh, Swat. Dine in, take away, or order for delivery.',
  robots: 'index, follow',
  openGraph: {
    title: 'HOTBOX Restaurant',
    description:
      'HOTBOX Restaurant — a family restaurant in Charbagh, Swat. Dine in, take away, or order for delivery.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOTBOX Restaurant',
    description:
      'HOTBOX Restaurant — a family restaurant in Charbagh, Swat. Dine in, take away, or order for delivery.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="hb-shell">
      <Preloader />
      <Header />
      <main>{children}</main>
      <Footer />
      <a
        className="hb-floating-wa"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
        data-testid="link-floating-whatsapp"
      >
        <FaWhatsapp size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mouseMemoirs.variable} ${modak.variable} ${rubik.variable}`}
    >
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
