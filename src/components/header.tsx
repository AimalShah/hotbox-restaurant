'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Phone } from 'lucide-react';

import { navItems } from '@/components/nav-items';
import { OrderButton } from '@/components/order-button';
import { PHONE } from '@/data/hotbox';

export function Header() {
  const location = usePathname();

  return (
    <>
      <div className="hb-topline">
        <div className="hb-container hb-topline-inner">
          <span data-testid="text-topline-service">Dine in · Take away · Delivery</span>
          <span data-testid="text-topline-payment">Cash only</span>
        </div>
      </div>
      <header className="hb-header">
        <div className="hb-container hb-nav">
          <Link href="/" className="hb-logo" data-testid="link-logo">
            <span className="hb-logo-mark">
              <Flame size={22} />
            </span>
            <span>
              <span className="hb-logo-accent">HOT</span>BOX
            </span>
          </Link>
          <nav className="hb-nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={location === item.href ? 'active' : ''}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hb-header-actions">
            <a className="hb-phone" href={`tel:${PHONE}`} data-testid="link-header-phone">
              <Phone size={14} className="inline mr-1" />
              0342-6988268
            </a>
            <OrderButton
              label="WhatsApp"
              className="hb-button-sm hb-button-primary hidden sm:inline-flex"
            />
          </div>
        </div>
      </header>
      <nav className="hb-mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={location === item.href ? 'active' : ''}
            data-testid={`link-mobile-${item.label.toLowerCase()}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
