import type { Metadata } from 'next';

import { MenuPageClient } from '@/components/menu-page-client';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'The HOTBOX menu — pizza, fried chicken, burgers, shawarma, steaks, Chinese, Italian, drinks and sides. Prices from the printed menu.',
};

export default function MenuPage() {
  return <MenuPageClient />;
}
