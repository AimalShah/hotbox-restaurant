import type { Metadata, Viewport } from 'next';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Providers } from '@/components/providers';
import { WHATSAPP_URL } from '@/data/hotbox';
import { MessageCircle } from 'lucide-react';

import './globals.css';

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
        <MessageCircle size={26} />
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
