'use client';

import { useEffect, useState } from 'react';

import { MenuSection } from '@/components/menu-section';
import { OrderButton } from '@/components/order-button';
import { PageHero } from '@/components/page-hero';
import { menuCategories } from '@/data/hotbox';

export function MenuPageClient() {
  const [active, setActive] = useState(menuCategories[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && menuCategories.some((category) => category.id === hash)) {
      window.setTimeout(() => {
        setActive(hash);
        document.getElementById(hash)?.scrollIntoView({ block: 'start' });
      }, 80);
    }
  }, []);

  const jumpTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero
        eyebrow="The full spread"
        title="The menu"
        description="Pizza, fried chicken, burgers, shawarma, steaks, Chinese, Italian, drinks and the sides that make the order feel complete. Prices are listed exactly from the printed HOTBOX menu."
      />
      <div className="hb-menu-toolbar">
        <div className="hb-container hb-menu-tabs">
          {menuCategories.map((category) => (
            <button
              className={`hb-menu-tab ${active === category.id ? 'active' : ''}`}
              type="button"
              onClick={() => jumpTo(category.id)}
              key={category.id}
              data-testid={`button-menu-category-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      <div className="hb-container">
        {menuCategories.map((category) => (
          <MenuSection category={category} key={category.id} />
        ))}
      </div>
      <div className="py-12 text-center">
        <OrderButton label="Order from the full menu" />
        <p className="hb-note mt-3">
          Ordering happens directly on WhatsApp. No online cart or checkout.
        </p>
      </div>
    </>
  );
}
