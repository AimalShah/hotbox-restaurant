import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowRight, BadgeCheck, ChevronRight, Clock3, Flame, Mail, MapPin, Menu as MenuIcon, MessageCircle, Navigation, Phone, Star, Truck, Users, UtensilsCrossed, X } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { deals, menuCategories, PHONE, WHATSAPP_URL, type Deal, type MenuCategory } from './data/hotbox';

const queryClient = new QueryClient();

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/deals', label: 'Deals' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function OrderButton({ label = 'Order on WhatsApp', className = 'hb-button-primary' }: { label?: string; className?: string }) {
  return (
    <a data-testid={`link-whatsapp-${label.toLowerCase().replaceAll(' ', '-')}`} className={`hb-button ${className}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
      <MessageCircle size={17} /> {label}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return (
    <>
      <div className="hb-topline">
        <div className="hb-container flex min-h-8 items-center justify-between gap-3">
          <span data-testid="text-topline-service">Dine in · Take away · Delivery</span>
          <span data-testid="text-topline-payment">Cash only</span>
        </div>
      </div>
      <header className="hb-header">
        <div className="hb-container hb-nav">
          <Link href="/" className="hb-logo" data-testid="link-logo">
            <span className="hb-logo-mark"><Flame size={22} /></span>
            <span><span className="hb-logo-accent">HOT</span>BOX</span>
          </Link>
          <nav className="hb-nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={location === item.href ? 'active' : ''} data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</Link>
            ))}
          </nav>
          <div className="hb-header-actions">
            <a className="hb-phone" href={`tel:${PHONE}`} data-testid="link-header-phone"><Phone size={14} className="inline mr-1" />0342-6988268</a>
            <OrderButton label="WhatsApp" className="hb-button-orange hidden sm:inline-flex" />
            <button className="hb-menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} data-testid="button-mobile-menu">
              {open ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="hb-mobile-panel md:hidden">
            <div className="hb-container">
              {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</Link>)}
              <a href={`tel:${PHONE}`} data-testid="link-mobile-phone">Call 0342-6988268</a>
              <OrderButton label="Order on WhatsApp" className="hb-button-primary w-full" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="hb-footer">
      <div className="hb-container hb-footer-grid">
        <div>
          <Link href="/" className="hb-logo" data-testid="link-footer-logo"><span className="hb-logo-mark"><Flame size={22} /></span><span><span className="hb-logo-accent">HOT</span>BOX</span></Link>
          <p>A Family Restaurant in Charbagh, Swat. Dine in, take away, or have it delivered.</p>
          <OrderButton label="Order on WhatsApp" className="hb-button-orange" />
        </div>
        <div>
          <h3>Explore</h3>
          {navItems.slice(1).map((item) => <Link className="block" key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase()}`}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Find us</h3>
          <p data-testid="text-footer-address">1 Bahrain Rd, Main Bazar,<br />Charbagh, Swat, Pakistan 19120</p>
          <a href={`tel:${PHONE}`} data-testid="link-footer-phone">0342-6988268</a>
          <a className="block" href="mailto:aitezaz88@yahoo.com" data-testid="link-footer-email">aitezaz88@yahoo.com</a>
        </div>
        <div>
          <h3>Social</h3>
          <a className="block" href="https://www.facebook.com/hotboxcharbaghswat" target="_blank" rel="noreferrer" data-testid="link-footer-facebook">Facebook / hotboxcharbaghswat</a>
          <a className="block" href="https://www.instagram.com/hotbox_restaurant" target="_blank" rel="noreferrer" data-testid="link-footer-instagram">Instagram / hotbox_restaurant</a>
          <a className="block" href="https://www.tiktok.com/@hotbox_restaurant" target="_blank" rel="noreferrer" data-testid="link-footer-tiktok">TikTok / hotbox_restaurant</a>
        </div>
      </div>
      <div className="hb-container hb-footer-bottom"><span>HOTBOX · Charbagh, Swat</span><span>Opening hours: {"{{OPENING_HOURS}}"} · needs confirmation</span></div>
    </footer>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="hb-shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <a className="hb-floating-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp" data-testid="link-floating-whatsapp"><MessageCircle size={26} /></a>
    </div>
  );
}

const foodImages = {
  burger: '/images/hotbox-burger.jpg',
  pizza: '/images/hotbox-pizza.jpg',
  chicken: '/images/hotbox-chicken.jpg',
  fries: '/images/hotbox-fries.jpg',
} as const;

function FoodImage({ label, src, className = '' }: { label: string; src: string; className?: string }) {
  return <div className={`hb-food-image ${className}`}><img src={src} alt={`${label} — stock food photography`} loading="lazy" /><span className="hb-image-credit">Stock photo</span></div>;
}

function Home() {
  const popular = [
    ['Crown Crust Pizza', 'Rs. 1,300 / 1,700 / 2,250', 'M / L / F', 'special-pizzas'],
    ['Zinger Cheese Burger', 'Rs. 450', '', 'burgers'],
    ['Loaded Fries', 'Rs. 350 / 650', 'S / L', 'snacks'],
    ['Hot Box Special Pizza', 'Rs. 1,500 / 1,950 / 2,550', 'M / L / F', 'special-pizzas'],
    ['Chicken Strips', 'Rs. 450 / 850', '6 / 12 pc', 'fried-chicken'],
    ['Shawarma Platter', 'Rs. 700', '', 'platters'],
  ];
  return (
    <>
      <section className="hb-hero">
        <div className="hb-container hb-hero-inner">
          <div>
            <div className="hb-kicker" data-testid="text-hero-kicker">A family restaurant · Charbagh, Swat</div>
            <h1 className="hb-display" data-testid="text-hero-heading">Big flavor.<br /><span className="text-[color:hsl(var(--accent))]">Right here.</span></h1>
            <p className="hb-hero-copy">From Crown Crust Pizza to a Zinger Cheese Burger with Loaded Fries, HOTBOX brings the food Charbagh makes time for.</p>
            <div className="hb-hero-actions"><OrderButton /><Link href="/menu" className="hb-button hb-button-outline" data-testid="link-hero-menu">See the full menu <ArrowRight size={16} /></Link></div>
          </div>
          <div className="hb-hero-visual"><FoodImage label="HOTBOX burger" src={foodImages.burger} className="hb-hero-photo" /><div className="hb-rating-chip" data-testid="badge-hero-rating"><Star size={14} fill="currentColor" className="inline mr-1" /> 4.6 / 5 · 34 Google reviews</div></div>
        </div>
      </section>

      <section className="hb-section">
        <div className="hb-container">
          <div className="hb-section-head"><div><div className="hb-eyebrow">Why people come back</div><h2 className="hb-display">Made for the<br />whole table.</h2></div><p className="hb-section-intro">A local fast-food restaurant with room for the everyday order, the family table, and the party you have been planning.</p></div>
          <div className="hb-trust-grid">
            <div className="hb-trust-item"><BadgeCheck /><h3>Quality product</h3><p>Named favourites from the menu, made for a satisfying stop.</p></div>
            <div className="hb-trust-item"><UtensilsCrossed /><h3>Fresh food</h3><p>Pizza, burgers, chicken, wraps, platters and more in one place.</p></div>
            <div className="hb-trust-item"><Truck /><h3>Free delivery</h3><p>Up to 2 km on orders above Rs. 1,000.</p></div>
            <div className="hb-trust-item"><Users /><h3>Come as you are</h3><p>Dine in, take away, or order for delivery.</p></div>
          </div>
        </div>
      </section>

      <section className="hb-section hb-section-tinted">
        <div className="hb-container">
          <div className="hb-section-head"><div><div className="hb-eyebrow">Find your mood</div><h2 className="hb-display">One menu.<br />Many cravings.</h2></div><Link href="/menu" className="hb-button hb-button-dark" data-testid="link-category-menu">Browse all <ArrowRight size={16} /></Link></div>
          <Swiper className="hb-category-carousel" spaceBetween={12} slidesPerView={2.15} breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }} grabCursor>
            {menuCategories.filter((category) => ['snacks', 'fried-chicken', 'regular-pizzas', 'burgers', 'shawarma-paratha', 'steaks', 'chinese-italian', 'fresh-drinks'].includes(category.id)).map((category, index) => (
              <SwiperSlide key={category.id}><Link href={`/menu#${category.id}`} className="hb-category-card" data-testid={`link-category-${category.id}`}><div className="hb-category-number">0{index + 1}</div><h3>{category.label}</h3><ChevronRight size={17} className="mt-4 text-[color:hsl(var(--primary))]" /></Link></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="hb-section">
        <div className="hb-container">
          <div className="hb-section-head"><div><div className="hb-eyebrow">The ones people mention</div><h2 className="hb-display">Start here.</h2></div><span className="hb-note">Popular dishes shown from the verified review summary.</span></div>
          <Swiper className="hb-popular-carousel" spaceBetween={16} slidesPerView={1.08} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} pagination={{ clickable: true }} modules={[Pagination]} grabCursor>
            {popular.map(([name, price, variants, category], index) => <SwiperSlide key={name}><Link href={`/menu#${category}`} className="hb-popular-card" data-testid={`card-popular-${name.toLowerCase().replaceAll(' ', '-')}`}><FoodImage label={name} src={[foodImages.pizza, foodImages.burger, foodImages.fries, foodImages.pizza, foodImages.chicken, foodImages.chicken][index]} /><div className="hb-popular-info"><h3>{name}</h3>{variants && <span className="hb-note">{variants}</span>}<span className="hb-price">{price}</span><p>Available from the HOTBOX menu.</p></div></Link></SwiperSlide>)}
          </Swiper>
        </div>
      </section>

      <section className="hb-section hb-section-red">
        <div className="hb-container">
          <div className="hb-section-head"><div><div className="hb-eyebrow">For the table</div><h2 className="hb-display">Deals that<br />show up big.</h2></div><Link href="/deals" className="hb-button hb-button-orange" data-testid="link-view-deals">View all deals <ArrowRight size={16} /></Link></div>
          <Swiper className="hb-deal-carousel" spaceBetween={16} slidesPerView={1.08} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} grabCursor pagination={{ clickable: true }} modules={[Pagination]}>{deals.slice(0, 3).map((item) => <SwiperSlide key={item.name}><DealCard deal={item} /></SwiperSlide>)}</Swiper>
        </div>
      </section>

      <section className="hb-section">
        <div className="hb-container hb-review-layout">
          <div className="hb-rating-block"><div className="hb-rating-number" data-testid="text-rating-number">4.6</div><div className="font-bold">/ 5 on Google</div><div className="mt-2 flex items-center gap-1" aria-label="4.6 out of 5 stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div><div className="mt-3 text-sm font-bold" data-testid="text-review-count">34 Google reviews</div></div>
           <Swiper className="hb-review-carousel" spaceBetween={16} slidesPerView={1.08} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 1.5 } }} pagination={{ clickable: true }} autoplay={{ delay: 4200, disableOnInteraction: false }} modules={[Autoplay, Pagination]} grabCursor>
             <SwiperSlide><div className="hb-review-note"><strong>Food people name</strong><span>Crown Crust Pizza, Zinger Cheese Burger and Loaded Fries are called out as standouts in the available review summary.</span></div></SwiperSlide>
             <SwiperSlide><div className="hb-review-note"><strong>Service that feels local</strong><span>The sampled themes describe staff as polite, friendly and attentive, with delivery noted as on time.</span></div></SwiperSlide>
             <SwiperSlide><div className="hb-review-note"><strong>A relaxed stop</strong><span>Review themes mention a nice atmosphere and aesthetic, relaxed vibes.</span></div></SwiperSlide>
           </Swiper>
        </div>
      </section>

      <LocationBlock />
      <FinalCTA />
    </>
  );
}

function LocationBlock() {
  return <section className="hb-section hb-section-tinted"><div className="hb-container hb-location-grid"><div className="hb-location-card"><div className="hb-eyebrow">Come find us</div><h3>Charbagh, Swat</h3><div className="hb-location-line"><MapPin size={19} /><span data-testid="text-location-address">1 Bahrain Rd, Main Bazar, Charbagh, Swat, Pakistan 19120</span></div><div className="hb-location-line"><Truck size={19} /><span>Free delivery up to 2 km on orders above Rs. 1,000.</span></div><div className="hb-location-line"><UtensilsCrossed size={19} /><span>Dine in · Take away · Delivery</span></div><div className="hb-hours"><strong>Opening hours</strong><span data-testid="text-opening-hours">{"{{OPENING_HOURS}}"} · needs confirmation</span></div><div className="mt-5 flex flex-wrap gap-2"><OrderButton label="Order now" /><a className="hb-button hb-button-outline" href={`tel:${PHONE}`} data-testid="link-location-call"><Phone size={16} /> Call now</a></div></div><div className="hb-map" aria-label="Map placeholder for HOTBOX location" data-testid="map-location-placeholder"><div><Navigation size={34} className="mx-auto mb-2 text-[color:hsl(var(--secondary))]" /><strong className="hb-display text-2xl">Map location</strong><p className="mt-1 text-sm opacity-70">1 Bahrain Rd, Main Bazar, Charbagh, Swat</p></div></div></div></section>;
}

function FinalCTA() {
  return <section className="hb-final-cta"><div className="hb-container"><div className="hb-eyebrow text-[color:hsl(var(--accent))]">Your next meal is one message away</div><h2 className="hb-display">Hungry?<br />Let's fix that.</h2><p>WhatsApp HOTBOX to place your order. Call us when you would rather talk it through.</p><div className="flex flex-wrap justify-center gap-2"><OrderButton label="Order on WhatsApp" className="hb-button-orange" /><a className="hb-button hb-button-outline" href={`tel:${PHONE}`} data-testid="link-final-call"><Phone size={16} /> 0342-6988268</a></div></div></section>;
}

function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="hb-page-hero"><div className="hb-container"><div className="hb-eyebrow">{eyebrow}</div><h1 className="hb-display" data-testid={`text-page-title-${title.toLowerCase().replaceAll(' ', '-')}`}>{title}</h1><p>{description}</p></div></section>;
}

function DealCard({ deal }: { deal: Deal }) {
  return <article className="hb-deal-card" data-testid={`card-deal-${deal.name.toLowerCase().replaceAll(' ', '-')}`}><span className="hb-deal-badge">{deal.group}</span><h3>{deal.name}</h3><p>{deal.contents}</p><div className="hb-deal-price">Rs. {deal.price.toLocaleString()}</div><OrderButton label="Order this deal" className="hb-button-primary" /></article>;
}

function MenuPage() {
  const [active, setActive] = useState(menuCategories[0].id);
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && menuCategories.some((category) => category.id === hash)) {
      setActive(hash);
      window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ block: 'start' }), 80);
    }
  }, []);
  const jumpTo = (id: string) => { setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return <><PageHero eyebrow="The full spread" title="The menu" description="Pizza, fried chicken, burgers, shawarma, steaks, Chinese, Italian, drinks and the sides that make the order feel complete. Prices are listed exactly from the printed HOTBOX menu." /><div className="hb-menu-toolbar"><div className="hb-container hb-menu-tabs">{menuCategories.map((category) => <button className={`hb-menu-tab ${active === category.id ? 'active' : ''}`} type="button" onClick={() => jumpTo(category.id)} key={category.id} data-testid={`button-menu-category-${category.id}`}>{category.label}</button>)}</div></div><div className="hb-container">{menuCategories.map((category) => <MenuSection category={category} key={category.id} />)}</div><div className="py-12 text-center"><OrderButton label="Order from the full menu" /><p className="hb-note mt-3">Ordering happens directly on WhatsApp. No online cart or checkout.</p></div></>;
}

function MenuSection({ category }: { category: MenuCategory }) {
  return <section className="hb-menu-section" id={category.id}><div className="hb-menu-section-head"><h2>{category.label}</h2><span className="hb-menu-count">{category.items.length} items</span></div><div className="hb-menu-list">{category.items.map((item) => <div className="hb-menu-row" key={item.name} data-testid={`row-menu-${category.id}-${item.name.toLowerCase().replaceAll(' ', '-')}`}><div><div className="hb-menu-name">{item.name}</div>{item.variants && <span className="hb-menu-variants">{item.variants}</span>}</div><div className="hb-menu-price">{item.price}</div></div>)}</div><div className="hb-category-order"><OrderButton label={`Order ${category.label}`} className="hb-button-outline" /></div></section>;
}

function DealsPage() {
  const groups = Array.from(new Set(deals.map((deal) => deal.group)));
  return <><PageHero eyebrow="Made for sharing" title="Deals" description="Pick a lane: a quick solo combo, a family table, a student order, or a pizza run. Every deal here is from the verified printed menu." /><section className="hb-section"><div className="hb-container"><div className="hb-note mb-8 border-l-4 border-[hsl(var(--secondary))] bg-[hsl(var(--accent)/.25)] p-4" data-testid="text-deals-disclaimer">Menu note: all deals available with BBQ and Fajita pizza only.</div>{groups.map((group) => <div key={group} className="mb-14"><div className="hb-section-head"><div><div className="hb-eyebrow">Choose your spread</div><h2 className="hb-display">{group}</h2></div></div><div className="hb-deal-grid">{deals.filter((deal) => deal.group === group).map((item) => <DealCard deal={item} key={item.name} />)}</div></div>)}</div></section><FinalCTA /></>;
}

function AboutPage() {
  return <><PageHero eyebrow="The place behind the box" title="A family restaurant" description="HOTBOX is a fast-food restaurant in Charbagh, Swat — a local place for the everyday meal, the bigger table and the celebrations that bring people together." /><section className="hb-section"><div className="hb-container hb-about-grid"><div className="hb-story-card"><div className="hb-eyebrow">HOTBOX · Charbagh, Swat</div><h2 className="hb-display mt-3 text-5xl sm:text-7xl">Local food.<br />Full table.</h2><p>At HOTBOX, the menu is built around variety: pizzas and burgers alongside fried chicken, wraps, shawarma, steaks, Chinese and Italian dishes, desserts and fresh drinks. It is a family restaurant in the heart of Charbagh, with dine-in, take-away and delivery service.</p><OrderButton label="Talk to HOTBOX" className="hb-button-orange" /></div><div><div className="hb-eyebrow">What is verified</div><div className="hb-fact-list mt-4"><div className="hb-fact"><MapPin /><div><strong>Right in Charbagh</strong><span>1 Bahrain Rd, Main Bazar, Charbagh, Swat.</span></div></div><div className="hb-fact"><Truck /><div><strong>Delivery that goes 2 km</strong><span>Free delivery on orders above Rs. 1,000, up to 2 km.</span></div></div><div className="hb-fact"><Users /><div><strong>Made for groups</strong><span>Dine in, take away or delivery — with deals for families, students and parties.</span></div></div><div className="hb-fact"><BadgeCheck /><div><strong>4.6 / 5 on Google</strong><span>34 Google reviews, with positive themes in the sampled summary.</span></div></div></div></div></div></section><section className="hb-section hb-section-tinted"><div className="hb-container"><div className="hb-event-banner"><div className="hb-eyebrow">Make room for the moment</div><h2 className="hb-display">Your party,<br />our place.</h2><p>HOTBOX is a formal venue for birthdays, welcome parties and farewell parties, with discounted packages available. Contact the restaurant to discuss your event.</p><div className="flex flex-wrap gap-2"><OrderButton label="Ask about an event" className="hb-button-dark" /><a className="hb-button hb-button-outline" href={`tel:${PHONE}`} data-testid="link-about-event-call"><Phone size={16} /> Call us</a></div></div></div></section><FinalCTA /></>;
}

function ContactPage() {
  return <><PageHero eyebrow="Come hungry" title="Contact" description="Find HOTBOX in Main Bazar, Charbagh. WhatsApp is the fastest way to order; phone and email are here when you need them." /><section className="hb-section"><div className="hb-container hb-contact-grid"><div><div className="hb-eyebrow">Reach HOTBOX</div><h2 className="hb-display">Let's talk<br />food.</h2><div className="hb-contact-list"><div className="hb-contact-item"><MapPin /><div><strong>Address</strong><span data-testid="text-contact-address">1 Bahrain Rd, Main Bazar, Charbagh, Swat, Pakistan 19120</span></div></div><div className="hb-contact-item"><Phone /><div><strong>Phone / WhatsApp</strong><a href={`tel:${PHONE}`} data-testid="link-contact-phone">0342-6988268</a><a className="block" href={WHATSAPP_URL} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">Message on WhatsApp</a></div></div><div className="hb-contact-item"><Mail /><div><strong>Email</strong><a href="mailto:aitezaz88@yahoo.com" data-testid="link-contact-email">aitezaz88@yahoo.com</a></div></div></div><div className="hb-hours"><strong><Clock3 size={17} className="inline mr-1" /> Opening hours</strong><span data-testid="text-contact-opening-hours">{"{{OPENING_HOURS}}"} · needs confirmation</span></div><div className="hb-socials"><a className="hb-social-link" href="https://www.facebook.com/hotboxcharbaghswat" target="_blank" rel="noreferrer" data-testid="link-contact-facebook"><FaFacebook size={14} className="inline mr-1" /> Facebook</a><a className="hb-social-link" href="https://www.instagram.com/hotbox_restaurant" target="_blank" rel="noreferrer" data-testid="link-contact-instagram"><FaInstagram size={14} className="inline mr-1" /> Instagram</a><a className="hb-social-link" href="https://www.tiktok.com/@hotbox_restaurant" target="_blank" rel="noreferrer" data-testid="link-contact-tiktok">TikTok</a></div></div><div className="hb-map" aria-label="Map placeholder for HOTBOX contact location" data-testid="map-contact-placeholder"><div><Navigation size={42} className="mx-auto mb-3 text-[color:hsl(var(--secondary))]" /><strong className="hb-display text-3xl">1 Bahrain Road</strong><p className="mt-1 opacity-70">Main Bazar, Charbagh, Swat</p><a className="hb-button hb-button-orange mt-5" href="https://www.google.com/maps/search/?api=1&query=1+Bahrain+Rd+Main+Bazar+Charbagh+Swat" target="_blank" rel="noreferrer" data-testid="link-open-map"><Navigation size={16} /> Open map</a></div></div></div></section><section className="hb-section hb-section-red"><div className="hb-container text-center"><div className="hb-eyebrow">Order without the wait</div><h2 className="hb-display">WhatsApp us<br />your craving.</h2><p className="hb-section-intro mx-auto mb-5">Free delivery up to 2 km on orders above Rs. 1,000. Cash only.</p><div className="flex flex-wrap justify-center gap-2"><OrderButton label="Start a WhatsApp order" className="hb-button-orange" /><a className="hb-button hb-button-outline text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary-foreground)/.45)]" href={`tel:${PHONE}`} data-testid="link-contact-call"><Phone size={16} /> Call now</a></div></div></section></>;
}

function Router() {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}><Switch><Route path="/" component={Home} /><Route path="/menu" component={MenuPage} /><Route path="/deals" component={DealsPage} /><Route path="/about" component={AboutPage} /><Route path="/contact" component={ContactPage} /><Route component={NotFound} /></Switch></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Shell><Router /></Shell></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;