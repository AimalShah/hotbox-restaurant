import { MapPin, Navigation, Phone, Truck, UtensilsCrossed } from 'lucide-react';

import { OrderButton } from '@/components/order-button';
import { PHONE } from '@/data/hotbox';

export function LocationBlock() {
  return (
    <section className="hb-section hb-section-tinted">
      <div className="hb-container hb-location-grid">
        <div className="hb-location-card">
          <div className="hb-eyebrow">Come find us</div>
          <h3>Charbagh, Swat</h3>
          <div className="hb-location-line">
            <MapPin size={19} />
            <span data-testid="text-location-address">
              1 Bahrain Rd, Main Bazar, Charbagh, Swat, Pakistan 19120
            </span>
          </div>
          <div className="hb-location-line">
            <Truck size={19} />
            <span>Free delivery up to 2 km on orders above Rs. 1,000.</span>
          </div>
          <div className="hb-location-line">
            <UtensilsCrossed size={19} />
            <span>Dine in · Take away · Delivery</span>
          </div>
          <div className="hb-hours">
            <strong>Opening hours</strong>
            <span data-testid="text-opening-hours">{'{{OPENING_HOURS}}'} · needs confirmation</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <OrderButton label="Order now" />
            <a className="hb-button hb-button-outline" href={`tel:${PHONE}`} data-testid="link-location-call">
              <Phone size={16} /> Call now
            </a>
          </div>
        </div>
        <div
          className="hb-map"
          aria-label="Map placeholder for HOTBOX location"
          data-testid="map-location-placeholder"
        >
          <div>
            <Navigation size={34} className="mx-auto mb-2 text-[color:hsl(var(--secondary))]" />
            <strong className="hb-display text-2xl">Map location</strong>
            <p className="mt-1 text-sm opacity-70">
              1 Bahrain Rd, Main Bazar, Charbagh, Swat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
