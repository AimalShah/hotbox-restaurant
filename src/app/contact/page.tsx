import type { Metadata } from 'next';
import {
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { OrderButton } from '@/components/order-button';
import { PageHero } from '@/components/page-hero';
import { PHONE, WHATSAPP_URL } from '@/data/hotbox';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Find HOTBOX in Main Bazar, Charbagh, Swat. WhatsApp is the fastest way to order; phone and email are here when you need them.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Come hungry"
        title="Contact"
        description="Find HOTBOX in Main Bazar, Charbagh. WhatsApp is the fastest way to order; phone and email are here when you need them."
      />
      <section className="hb-section">
        <div className="hb-container hb-contact-grid">
          <div>
            <div className="hb-eyebrow">Reach HOTBOX</div>
            <h2 className="hb-display">
              Let&apos;s talk
              <br />
              food.
            </h2>
            <div className="hb-contact-list">
              <div className="hb-contact-item">
                <MapPin />
                <div>
                  <strong>Address</strong>
                  <span data-testid="text-contact-address">
                    1 Bahrain Rd, Main Bazar, Charbagh, Swat, Pakistan 19120
                  </span>
                </div>
              </div>
              <div className="hb-contact-item">
                <Phone />
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <a href={`tel:${PHONE}`} data-testid="link-contact-phone">
                    0342-6988268
                  </a>
                  <a
                    className="block"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-contact-whatsapp"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
              <div className="hb-contact-item">
                <Mail />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:aitezaz88@yahoo.com" data-testid="link-contact-email">
                    aitezaz88@yahoo.com
                  </a>
                </div>
              </div>
            </div>
            <div className="hb-hours">
              <strong>
                <Clock3 size={17} className="inline mr-1" /> Opening hours
              </strong>
              <span data-testid="text-contact-opening-hours">
                11 am – 1 am
              </span>
            </div>
            <div className="hb-socials">
              <a
                className="hb-social-link"
                href="https://www.facebook.com/hotboxcharbaghswat"
                target="_blank"
                rel="noreferrer"
                data-testid="link-contact-facebook"
              >
                <FaFacebook size={14} className="inline mr-1" /> Facebook
              </a>
              <a
                className="hb-social-link"
                href="https://www.instagram.com/hotbox_restaurant"
                target="_blank"
                rel="noreferrer"
                data-testid="link-contact-instagram"
              >
                <FaInstagram size={14} className="inline mr-1" /> Instagram
              </a>
              <a
                className="hb-social-link"
                href="https://www.tiktok.com/@hotbox_restaurant"
                target="_blank"
                rel="noreferrer"
                data-testid="link-contact-tiktok"
              >
                TikTok
              </a>
            </div>
          </div>
          <div
            className="hb-map"
            aria-label="Map showing HOTBOX at 1 Bahrain Rd, Charbagh, Swat"
            data-testid="map-contact-placeholder"
          >
            <iframe
              title="HOTBOX on Google Maps"
              src="https://www.google.com/maps?q=1+Bahrain+Rd,+Main+Bazar,+Charbagh,+Swat,+Pakistan+19120&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="hb-button hb-button-sm hb-map-open"
              href="https://www.google.com/maps/search/?api=1&query=1+Bahrain+Rd+Main+Bazar+Charbagh+Swat"
              target="_blank"
              rel="noreferrer"
              data-testid="link-open-map"
            >
              <Navigation size={16} /> Open map
            </a>
          </div>
        </div>
      </section>
      <section className="hb-section hb-section-red">
        <div className="hb-container text-center">
          <div className="hb-eyebrow">Order without the wait</div>
          <h2 className="hb-display">
            WhatsApp us
            <br />
            your craving.
          </h2>
          <p className="hb-section-intro mx-auto mb-5">
            Free delivery up to 2 km on orders above Rs. 1,000. Cash only.
          </p>
          <div className="flex flex-wrap justify-center w-full gap-2">
            <OrderButton label="Start a WhatsApp order" variant="hb-button-orange" />
         
          </div>
        </div>
      </section>
    </>
  );
}
