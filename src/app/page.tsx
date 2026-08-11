import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Star,
  Truck,
  Users,
  UtensilsCrossed,
} from 'lucide-react';

import {
  CategoryCarousel,
  DealCarousel,
  PopularCarousel,
  ReviewCarousel,
  type PopularItem,
} from '@/components/carousels';
import { FinalCTA } from '@/components/final-cta';
import { FoodImage, foodImages } from '@/components/food-image';
import { LocationBlock } from '@/components/location-block';
import { deals } from '@/data/hotbox';

const popular: PopularItem[] = [
  ['Crown Crust Pizza', 'Rs. 1,300 / 1,700 / 2,250', 'M / L / F', 'special-pizzas'],
  ['Zinger Cheese Burger', 'Rs. 450', '', 'burgers'],
  ['Loaded Fries', 'Rs. 350 / 650', 'S / L', 'snacks'],
  ['Hot Box Special Pizza', 'Rs. 1,500 / 1,950 / 2,550', 'M / L / F', 'special-pizzas'],
  ['Chicken Strips', 'Rs. 450 / 850', '6 / 12 pc', 'fried-chicken'],
  ['Shawarma Platter', 'Rs. 700', '', 'platters'],
];

export default function Home() {
  return (
    <>
      <section className="hb-hero">
        <div className="hb-container hb-hero-inner">
          <div>
            <div className="hb-kicker" data-testid="text-hero-kicker">
              A family restaurant · Charbagh, Swat
            </div>
            <h1 className="hb-display" data-testid="text-hero-heading">
              Big flavor.
              <br />
              <span className="text-[color:hsl(var(--accent))]">Right here.</span>
            </h1>
            <p className="hb-hero-copy">
              From Crown Crust Pizza to a Zinger Cheese Burger with Loaded Fries, HOTBOX brings
              the food Charbagh makes time for.
            </p>
            <div className="hb-hero-actions">
              <Link
                href="/menu"
                className="hb-button hb-button-outline"
                data-testid="link-hero-menu"
              >
                See Full Menu
              </Link>
            </div>
          </div>
          <div className="hb-hero-visual">
            <FoodImage
              label="HOTBOX burger"
              src={foodImages.burger}
              className="hb-hero-photo"
            />
            <div className="hb-rating-chip" data-testid="badge-hero-rating">
              <Star size={14} fill="currentColor" className="inline mr-1" /> 4.6 / 5 · 34 Google
              reviews
            </div>
          </div>
        </div>
      </section>

      <section className="hb-section">
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

      <section className="hb-section hb-section-tinted">
        <div className="hb-container">
          <div className="hb-section-head">
            <div>
              <div className="hb-eyebrow">Find your mood</div>
              <h2 className="hb-display">
                One menu.
                <br />
                Many cravings.
              </h2>
            </div>
            <Link href="/menu" className="hb-button hb-button-dark" data-testid="link-category-menu">
              Browse all <ArrowRight size={16} />
            </Link>
          </div>
          <CategoryCarousel />
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
      <FinalCTA />
    </>
  );
}
