'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Menu as MenuIcon, Phone, X } from 'lucide-react';

import { navItems } from '@/components/nav-items';
import { OrderButton } from '@/components/order-button';
import { PHONE } from '@/data/hotbox';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = usePathname();
  return (
    <>
      <div className="hb-topline">
        <div className="hb-container flex min-h-8 items-center justify-between gap-3">
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
            <OrderButton label="WhatsApp" className="hb-button-orange hidden sm:inline-flex" />
            <button
              className="hb-menu-button"
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
              data-testid="button-mobile-menu"
            >
              {open ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="hb-mobile-panel md:hidden">
            <div className="hb-container">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
              <a href={`tel:${PHONE}`} data-testid="link-mobile-phone">
                Call 0342-6988268
              </a>
              <OrderButton label="Order on WhatsApp" className="hb-button-primary w-full" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
