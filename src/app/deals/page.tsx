import type { Metadata } from 'next';

import { DealCard } from '@/components/deal-card';
import { FinalCTA } from '@/components/final-cta';
import { PageHero } from '@/components/page-hero';
import { deals } from '@/data/hotbox';

export const metadata: Metadata = {
  title: 'Deals',
  description:
    'HOTBOX deals — quick solo combos, family tables, student orders and pizza runs. From the verified printed menu.',
};

export default function DealsPage() {
  const groups = Array.from(new Set(deals.map((deal) => deal.group)));
  return (
    <>
      <PageHero
        eyebrow="Made for sharing"
        title="Deals"
        description="Pick a lane: a quick solo combo, a family table, a student order, or a pizza run. Every deal here is from the verified printed menu."
      />
      <section className="hb-section">
        <div className="hb-container">
          <div
            className="hb-note mb-8 border-l-4 border-[hsl(var(--secondary))] bg-[hsl(var(--accent)/.25)] p-4"
            data-testid="text-deals-disclaimer"
          >
            Menu note: all deals available with BBQ and Fajita pizza only.
          </div>
          {groups.map((group) => (
            <div key={group} className="mb-14">
              <div className="hb-section-head">
                <div>
                  <div className="hb-eyebrow">Choose your spread</div>
                  <h2 className="hb-display">{group}</h2>
                </div>
              </div>
              <div className="hb-deal-grid">
                {deals
                  .filter((deal) => deal.group === group)
                  .map((item) => (
                    <DealCard deal={item} key={item.name} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
