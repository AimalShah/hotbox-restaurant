import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Phone,
  Star,
  Truck,
  Users,
  UtensilsCrossed,
} from 'lucide-react';

import {
  DealCarousel,
  PopularCarousel,
  ReviewCarousel,
  type PopularItem,
} from '@/components/carousels';
import { FinalCTA } from '@/components/final-cta';
import { LocationBlock } from '@/components/location-block';
import { OrderButton } from '@/components/order-button';
import { PageHero } from '@/components/page-hero';
import { PHONE, deals } from '@/data/hotbox';

export const metadata: Metadata = {
  title: 'About',
  description:
    'HOTBOX is a family fast-food restaurant in Charbagh, Swat — dine in, take away, delivery, and deals for families, students and parties.',
};

const popular: PopularItem[] = [
  ['Crown Crust Pizza', 'Rs. 1,300 / 1,700 / 2,250', 'M / L / F', 'special-pizzas'],
  ['Zinger Cheese Burger', 'Rs. 450', '', 'burgers'],
  ['Loaded Fries', 'Rs. 350 / 650', 'S / L', 'snacks'],
  ['Hot Box Special Pizza', 'Rs. 1,500 / 1,950 / 2,550', 'M / L / F', 'special-pizzas'],
  ['Chicken Strips', 'Rs. 450 / 850', '6 / 12 pc', 'fried-chicken'],
  ['Shawarma Platter', 'Rs. 700', '', 'platters'],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The place behind the box"
        title="A family restaurant"
        description="HOTBOX is a fast-food restaurant in Charbagh, Swat — a local place for the everyday meal, the bigger table and the celebrations that bring people together."
      />
      <section className="hb-section">
        <div className="hb-container hb-about-grid">
          <div className="hb-story-card">
            <div className="hb-eyebrow">HOTBOX · Charbagh, Swat</div>
            <h2 className="hb-display mt-3 text-6xl sm:text-8xl">
              Local food.
              <br />
              Full table.
            </h2>
            <p>
              At HOTBOX, the menu is built around variety: pizzas and burgers alongside fried
              chicken, wraps, shawarma, steaks, Chinese and Italian dishes, desserts and fresh
              drinks. It is a family restaurant in the heart of Charbagh, with dine-in, take-away
              and delivery service.
            </p>
            <OrderButton label="Talk to HOTBOX" variant="hb-button-orange" className="hb-button-sm" />
          </div>
          <div>
            <div className="hb-eyebrow">What is verified</div>
            <div className="hb-fact-list mt-4">
              <div className="hb-fact">
                <MapPin />
                <div>
                  <strong>Right in Charbagh</strong>
                  <span>1 Bahrain Rd, Main Bazar, Charbagh, Swat.</span>
                </div>
              </div>
              <div className="hb-fact">
                <Truck />
                <div>
                  <strong>Delivery that goes 2 km</strong>
                  <span>Free delivery on orders above Rs. 1,000, up to 2 km.</span>
                </div>
              </div>
              <div className="hb-fact">
                <Users />
                <div>
                  <strong>Made for groups</strong>
                  <span>Dine in, take away or delivery — with deals for families, students and parties.</span>
                </div>
              </div>
              <div className="hb-fact">
                <BadgeCheck />
                <div>
                  <strong>4.6 / 5 on Google</strong>
                  <span>34 Google reviews, with positive themes in the sampled summary.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hb-section hb-section-tinted">
        <div className="hb-container">
          <div className="hb-section-head">
            <div>
              <div className="hb-eyebrow">Why people come back</div>
              <h2 className="hb-display">
                Made for the
                <br />
                whole table.
              </h2>
            </div>
            <p className="hb-section-intro">
              A local fast-food restaurant with room for the everyday order, the family table, and
              the party you have been planning.
            </p>
          </div>
          <div className="hb-trust-grid">
            <div className="hb-trust-item">
              <BadgeCheck />
              <h3>Quality product</h3>
              <p>Named favourites from the menu, made for a satisfying stop.</p>
            </div>
            <div className="hb-trust-item">
              <UtensilsCrossed />
              <h3>Fresh food</h3>
              <p>Pizza, burgers, chicken, wraps, platters and more in one place.</p>
            </div>
            <div className="hb-trust-item">
              <Truck />
              <h3>Free delivery</h3>
              <p>Up to 2 km on orders above Rs. 1,000.</p>
            </div>
            <div className="hb-trust-item">
              <Users />
              <h3>Come as you are</h3>
              <p>Dine in, take away, or order for delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hb-section">
        <div className="hb-container">
          <div className="hb-section-head">
            <div>
              <div className="hb-eyebrow">The ones people mention</div>
              <h2 className="hb-display">Start here.</h2>
            </div>
            <span className="hb-note">
              Popular dishes shown from the verified review summary.
            </span>
          </div>
          <PopularCarousel items={popular} />
        </div>
      </section>

      <section className="hb-section hb-section-red">
        <div className="hb-container">
          <div className="hb-section-head">
            <div>
              <div className="hb-eyebrow">For the table</div>
              <h2 className="hb-display">
                Deals that
                <br />
                show up big.
              </h2>
            </div>
            <Link href="/deals" className="hb-button hb-button-orange" data-testid="link-view-deals">
              View all deals <ArrowRight size={16} />
            </Link>
          </div>
          <DealCarousel items={deals.slice(0, 3)} />
        </div>
      </section>

      <section className="hb-section">
        <div className="hb-container hb-review-layout">
          <div className="hb-rating-block">
            <div>
              <span className="hb-rating-number" data-testid="text-rating-number">
                4.6
              </span>
              <span className="hb-rating-meta">
                <span className="flex items-center gap-1" aria-label="4.6 out of 5 stars">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </span>
                <span className="block text-sm font-bold">/ 5 on Google</span>
              </span>
            </div>
            <div className="mt-1 text-sm font-bold" data-testid="text-review-count">
              34 Google reviews
            </div>
          </div>
          <ReviewCarousel />
        </div>
      </section>

      <LocationBlock />

      <section className="hb-section hb-section-tinted">
        <div className="hb-container">
          <div className="hb-event-banner">
            <div className="hb-eyebrow">Make room for the moment</div>
            <h2 className="hb-display">
              Your party,
              <br />
              our place.
            </h2>
            <p>
              HOTBOX is a formal venue for birthdays, welcome parties and farewell parties, with
              discounted packages available. Contact the restaurant to discuss your event.
            </p>
            <div className="flex flex-wrap gap-2">
              <OrderButton label="Ask about an event" variant="hb-button-dark" />
              <a
                className="hb-button hb-button-outline"
                href={`tel:${PHONE}`}
                data-testid="link-about-event-call"
              >
                <Phone size={16} /> Call us
              </a>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
