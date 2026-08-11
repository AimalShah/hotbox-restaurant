import type { Metadata } from 'next';
import { BadgeCheck, MapPin, Phone, Truck, Users } from 'lucide-react';

import { FinalCTA } from '@/components/final-cta';
import { OrderButton } from '@/components/order-button';
import { PageHero } from '@/components/page-hero';
import { PHONE } from '@/data/hotbox';

export const metadata: Metadata = {
  title: 'About',
  description:
    'HOTBOX is a family fast-food restaurant in Charbagh, Swat — dine in, take away, delivery, and deals for families, students and parties.',
};

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
            <OrderButton label="Talk to HOTBOX" className="hb-button-sm hb-button-orange" />
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
              <OrderButton label="Ask about an event" className="hb-button-dark" />
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
