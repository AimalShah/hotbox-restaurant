import type { MenuItem } from '@/data/hotbox';
import type { MenuCategory } from '@/data/hotbox';
import { OrderButton } from '@/components/order-button';

const SIZE_LABELS: Record<string, string> = {
  S: 'Small',
  M: 'Medium',
  L: 'Large',
  F: 'Family',
};

function splitSize(token: string): string {
  const clean = token.trim();
  if (SIZE_LABELS[clean]) return SIZE_LABELS[clean];
  return clean;
}

type SizePrice = { size: string; price: string };

function parseItem(item: MenuItem): { paired: SizePrice[]; single: string | null } {
  const prices = item.price
    ? item.price.split('/').map((p) => 'Rs. ' + p.trim().replace(/^Rs\.\s*/i, ''))
    : [];
  let sizes = item.variants ? item.variants.split('/').map(splitSize) : [];
  if (item.variants && /pc/i.test(item.variants)) {
    sizes = sizes.map((s) => (/^\d+$/.test(s) ? `${s} pc` : s.replace(/pc/i, 'pcs')));
  }
  if (sizes.length === prices.length && sizes.length > 1) {
    return { paired: sizes.map((size, i) => ({ size, price: prices[i] })), single: null };
  }
  return { paired: [], single: prices[0] ?? null };
}

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section className="hb-menu-section" id={category.id}>
      <div className="hb-menu-section-head">
        <h2>{category.label}</h2>
        <span className="hb-menu-count">{category.items.length} items</span>
      </div>
      <div className="hb-menu-list">
        {category.items.map((item) => {
          const { paired, single } = parseItem(item);
          return (
            <div
              className="hb-menu-item-card"
              key={item.name}
              data-testid={`row-menu-${category.id}-${item.name.toLowerCase().replaceAll(' ', '-')}`}
            >
              <div className="hb-menu-item-name">{item.name}</div>
              {paired.length > 0 ? (
                <div className="hb-menu-size-list">
                  {paired.map(({ size, price }) => (
                    <div className="hb-menu-size-row" key={size}>
                      <span className="hb-menu-size">{size}</span>
                      <span className="hb-menu-size-dots" aria-hidden="true" />
                      <span className="hb-menu-size-price">{price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {item.variants && (
                    <div className="hb-menu-item-desc">{item.variants}</div>
                  )}
                  {single && <div className="hb-menu-single-price">{single}</div>}
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="hb-category-order">
        <OrderButton label={`Order ${category.label}`} className="hb-button-sm hb-button-outline" />
      </div>
    </section>
  );
}
