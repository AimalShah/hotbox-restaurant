import type { MenuCategory } from '@/data/hotbox';
import { OrderButton } from '@/components/order-button';

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section className="hb-menu-section" id={category.id}>
      <div className="hb-menu-section-head">
        <h2>{category.label}</h2>
        <span className="hb-menu-count">{category.items.length} items</span>
      </div>
      <div className="hb-menu-list">
        {category.items.map((item) => (
          <div
            className="hb-menu-row"
            key={item.name}
            data-testid={`row-menu-${category.id}-${item.name.toLowerCase().replaceAll(' ', '-')}`}
          >
            <div>
              <div className="hb-menu-name">{item.name}</div>
              {item.variants && (
                <span className="hb-menu-variants">{item.variants}</span>
              )}
            </div>
            <div className="hb-menu-price">{item.price}</div>
          </div>
        ))}
      </div>
      <div className="hb-category-order">
        <OrderButton label={`Order ${category.label}`} className="hb-button-outline" />
      </div>
    </section>
  );
}
