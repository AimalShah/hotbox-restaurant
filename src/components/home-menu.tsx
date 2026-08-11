'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

import { MenuSection } from '@/components/menu-section';
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

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function HomeMenu() {
  const [active, setActive] = useState(menuGroups[0].id);
  const [query, setQuery] = useState('');

  const searching = query.trim().length > 0;

  const results = useMemo(() => {
    if (!searching) return [];
    const q = normalize(query);
    return menuCategories
      .map((category) => {
        const items = category.items.filter((item) =>
          [item.name, item.variants, category.label].some((value) =>
            value ? normalize(value).includes(q) : false,
          ),
        );
        return items.length > 0 ? { ...category, items } : null;
      })
      .filter((c): c is NonNullable<typeof c> => Boolean(c));
  }, [query, searching]);

  const group = menuGroups.find((g) => g.id === active) ?? menuGroups[0];
  const categories = searching
    ? results
    : group.categoryIds
        .map((id) => categoriesById.get(id))
        .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const matchCount = results.reduce((n, c) => n + c.items.length, 0);

  return (
    <section id="menu" className="hb-section hb-menu-home">
      <div className="hb-container">
        <div className="hb-section-head">
          <div>
            <div className="hb-eyebrow">The full spread</div>
            <h2 className="hb-display">The menu</h2>
          </div>
          <p className="hb-section-intro">
            Pizza, fried chicken, burgers, shawarma, steaks, Chinese, Italian, drinks and the sides
            that make the order feel complete. Prices are listed exactly from the printed HOTBOX menu.
          </p>
        </div>
      </div>

      <div className="hb-menu-toolbar">
        <div className="hb-container">
          <div className="hb-menu-controls">
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
            <div className="hb-menu-search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the menu…"
                aria-label="Search the menu"
                data-testid="input-menu-search"
              />
            </div>
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
        {searching && (
          <p className="hb-search-summary" data-testid="text-menu-search-results">
            {matchCount} {matchCount === 1 ? 'result' : 'results'} for “{query.trim()}”
          </p>
        )}
        {categories.map((category) => (
          <MenuSection category={category} key={category.id} />
        ))}
        {searching && results.length === 0 && (
          <p className="hb-search-empty" data-testid="text-menu-search-empty">
            No matches for “{query.trim()}” — try “pizza”, “zinger” or “shawarma”.
          </p>
        )}
      </div>
    </section>
  );
}
