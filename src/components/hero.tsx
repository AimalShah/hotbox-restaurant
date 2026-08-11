'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

import { FoodImage, foodImages } from '@/components/food-image';
import { OrderButton } from '@/components/order-button';
import { PRELOADER_DONE_EVENT } from '@/lib/reveal';

let entered = false;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (entered) return;
    entered = true;

    const reveal = () => sectionRef.current?.classList.add('hb-reveal');

    if (document.querySelector('.hb-preloader')) {
      window.addEventListener(PRELOADER_DONE_EVENT, reveal, { once: true });
    } else {
      requestAnimationFrame(reveal);
    }
  }, []);

  return (
    <section ref={sectionRef} className="hb-hero">
      <div className="hb-container hb-hero-inner">
        <div>
          <div className="hb-kicker" data-reveal="kicker" data-testid="text-hero-kicker">
            A family restaurant · Charbagh, Swat
          </div>
          <h1 className="hb-display" data-reveal="title" data-testid="text-hero-heading">
            Family fast food.
            <br />
            <span className="text-[color:hsl(var(--accent))]">Made in Charbagh.</span>
          </h1>
          <p className="hb-hero-copy" data-reveal="copy">
            Pizza, burgers, fried chicken, shawarma and more — dine in, take away, or delivered
            up to 2 km.
          </p>
          <div className="hb-hero-actions" data-reveal="actions">
            <OrderButton label="Order on WhatsApp" />
            <Link
              href="#menu"
              className="hb-button hb-button-outline"
              data-testid="link-hero-menu"
            >
              Browse the menu <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hb-hero-chips" data-reveal="chips">
            <Link href="/deals" className="hb-hero-chip" data-testid="link-hero-deals">
              <Star size={14} fill="currentColor" /> Deals from Rs. 500
            </Link>
            <span className="hb-hero-chip" data-testid="badge-hero-rating">
              <Star size={14} fill="currentColor" /> 4.6 / 5 · 34 Google reviews
            </span>
          </div>
        </div>
        <div className="hb-hero-visual" data-reveal="photo">
          <FoodImage
            label="HOTBOX burger"
            src={foodImages.burger}
            className="hb-hero-photo"
            sizes="(max-width: 640px) 72vw, 460px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
