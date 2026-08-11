'use client';

import { useEffect, useState } from 'react';

import { MenuSection } from '@/components/menu-section';
import { OrderButton } from '@/components/order-button';
import { PageHero } from '@/components/page-hero';
import { menuCategories } from '@/data/hotbox';

type MenuGroup = { id: string; label: string; categoryIds: string[] };

const menuGroups: MenuGroup[] = [
  { id: 'pizza', label: 'Pizza', categoryIds: ['regular-pizzas', 'special-pizzas'] },
  { id: 'burgers', label: 'Burgers', categoryIds: ['burgers'] },
  { id: 'chicken', label: 'Chicken', categoryIds: ['fried-chicken', 'strips-dips-box'] },
  { id: 'snacks', label: 'Snacks & Sides', categoryIds: ['snacks', 'soups', 'sauces', 'platters'] },
  { id: 'sandwiches', label: 'Sandwiches & Wraps', categoryIds: ['sandwiches', 'wraps', 'shawarma-paratha'] },
  { id: 'steaks', label: 'Steaks', categoryIds: ['steaks'] },
  { id: 'chinese', label: 'Chinese / Italian', categoryIds: ['chinese-italian'] },
  { id: 'drinks', label: 'Drinks & Desserts', categoryIds: ['chai-coffees', 'fresh-drinks', 'ice-cream', 'ice-cream-shakes'] },
];

const categoriesById = new Map(menuCategories.map((c) => [c.id, c]));

export function MenuPageClient() {
  const [active, setActive] = useState(menuGroups[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const group = menuGroups.find((g) => g.categoryIds.includes(hash));
    if (group) setActive(group.id);
  }, []);

  const group = menuGroups.find((g) => g.id === active) ?? menuGroups[0];
  const categories = group.categoryIds
    .map((id) => categoriesById.get(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <PageHero
        eyebrow="The full spread"
        title="The menu"
        description="Pizza, fried chicken, burgers, shawarma, steaks, Chinese, Italian, drinks and the sides that make the order feel complete. Prices are listed exactly from the printed HOTBOX menu."
      />
      <div className="hb-menu-toolbar">
        <div className="hb-container">
          <div className="hb-menu-tabs" role="tablist">
            {menuGroups.map((tab) => (
              <button
                className={`hb-menu-tab ${active === tab.id ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                key={tab.id}
                data-testid={`button-menu-category-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <select
            className="hb-menu-select"
            aria-label="Menu category"
            value={active}
            onChange={(e) => setActive(e.target.value)}
            data-testid="select-menu-category"
          >
            {menuGroups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="hb-container">
        {categories.map((category) => (
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
