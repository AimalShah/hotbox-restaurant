import { MapPin, Phone, Truck, UtensilsCrossed } from 'lucide-react';

import { OrderButton } from '@/components/order-button';
import { PHONE } from '@/data/hotbox';

const MAP_QUERY =
  '1+Bahrain+Rd,+Main+Bazar,+Charbagh,+Swat,+Pakistan+19120';

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
            <span data-testid="text-opening-hours">11 am – 1 am</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <OrderButton label="Order now" className="hb-button-sm" />
            <a className="hb-button hb-button-sm hb-button-outline" href={`tel:${PHONE}`} data-testid="link-location-call">
              <Phone size={16} /> Call now
            </a>
          </div>
        </div>
        <div
          className="hb-map"
          aria-label="Map showing HOTBOX at 1 Bahrain Rd, Charbagh, Swat"
          data-testid="map-location-placeholder"
        >
          <iframe
            title="HOTBOX on Google Maps"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
