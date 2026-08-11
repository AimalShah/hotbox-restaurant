import type { Deal } from '@/data/hotbox';
import { OrderButton } from '@/components/order-button';

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article
      className="hb-deal-card"
      data-testid={`card-deal-${deal.name.toLowerCase().replaceAll(' ', '-')}`}
    >
      <span className="hb-deal-badge">{deal.group}</span>
      <h3>{deal.name}</h3>
      <p>{deal.contents}</p>
      <div className="hb-deal-price">Rs. {deal.price.toLocaleString()}</div>
      <OrderButton label="Order this deal" variant="hb-button-primary" className="hb-button-sm" />
    </article>
  );
}
