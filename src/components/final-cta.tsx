import { Phone } from 'lucide-react';

import { OrderButton } from '@/components/order-button';
import { PHONE } from '@/data/hotbox';

export function FinalCTA() {
  return (
    <section className="hb-final-cta">
      <div className="hb-container">
        <div className="hb-eyebrow text-[color:hsl(var(--accent))]">
          Your next meal is one message away
        </div>
        <h2 className="hb-display">
          Hungry?
          <br />
          Let&apos;s fix that.
        </h2>
        <p>
          WhatsApp HOTBOX to place your order. Call us when you would rather talk it through.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <OrderButton label="Order on WhatsApp" className="hb-button-orange" />
          <a className="hb-button hb-button-outline" href={`tel:${PHONE}`} data-testid="link-final-call">
            <Phone size={16} /> 0342-6988268
          </a>
        </div>
      </div>
    </section>
  );
}
