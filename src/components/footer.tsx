import Link from 'next/link';
import { Flame } from 'lucide-react';

import { navItems } from '@/components/nav-items';
import { OrderButton } from '@/components/order-button';
import { PHONE } from '@/data/hotbox';

export function Footer() {
  return (
    <footer className="hb-footer">
      <div className="hb-container hb-footer-grid">
        <div>
          <Link href="/" className="hb-logo" data-testid="link-footer-logo">
            <span className="hb-logo-mark">
              <Flame size={22} />
            </span>
            <span>
              <span className="hb-logo-accent">HOT</span>BOX
            </span>
          </Link>
          <p>A Family Restaurant in Charbagh, Swat. Dine in, take away, or have it delivered.</p>
          <OrderButton label="Order on WhatsApp" variant="hb-button-primary" className="hb-button-sm" />
        </div>
        <div>
          <h3>Explore</h3>
          {navItems.slice(1).map((item) => (
            <Link
              className="block"
              key={item.href}
              href={item.href}
              data-testid={`link-footer-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Find us</h3>
          <p data-testid="text-footer-address">
            1 Bahrain Rd, Main Bazar,
            <br />
            Charbagh, Swat, Pakistan 19120
          </p>
          <a href={`tel:${PHONE}`} data-testid="link-footer-phone">
            0342-6988268
          </a>
          <a className="block" href="mailto:aitezaz88@yahoo.com" data-testid="link-footer-email">
            aitezaz88@yahoo.com
          </a>
        </div>
        <div>
          <h3>Social</h3>
          <a
            className="block"
            href="https://www.facebook.com/hotboxcharbaghswat"
            target="_blank"
            rel="noreferrer"
            data-testid="link-footer-facebook"
          >
            Facebook / hotboxcharbaghswat
          </a>
          <a
            className="block"
            href="https://www.instagram.com/hotbox_restaurant"
            target="_blank"
            rel="noreferrer"
            data-testid="link-footer-instagram"
          >
            Instagram / hotbox_restaurant
          </a>
          <a
            className="block"
            href="https://www.tiktok.com/@hotbox_restaurant"
            target="_blank"
            rel="noreferrer"
            data-testid="link-footer-tiktok"
          >
            TikTok / hotbox_restaurant
          </a>
        </div>
      </div>
      <div className="hb-container hb-footer-bottom">
        <span>HOTBOX · Charbagh, Swat</span>
        <span>11 am – 1 am</span>
      </div>
    </footer>
  );
}
