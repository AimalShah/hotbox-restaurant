'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { DealCard } from '@/components/deal-card';
import { FoodImage, foodImages } from '@/components/food-image';
import type { Deal } from '@/data/hotbox';

const POPULAR_IMAGES = [
  foodImages.pizza,
  foodImages.burger,
  foodImages.fries,
  foodImages.pizza,
  foodImages.chicken,
  foodImages.chicken,
] as const;

export type PopularItem = [name: string, price: string, variants: string, category: string];

export function PopularCarousel({ items }: { items: PopularItem[] }) {
  return (
    <Swiper
      className="hb-popular-carousel"
      spaceBetween={16}
      slidesPerView={1.08}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      grabCursor
    >
      {items.map(([name, price, variants, category], index) => (
        <SwiperSlide key={name} className='mb-'>
          <Link
            href={`/menu#${category}`}
            className="hb-popular-card"
            data-testid={`card-popular-${name.toLowerCase().replaceAll(' ', '-')}`}
            >
            <FoodImage
              label={name}
              src={POPULAR_IMAGES[index % POPULAR_IMAGES.length]}
              sizes="112px"
            />
            <div className="hb-popular-info">
              <h3>{name}</h3>
              {variants && <span className="hb-note">{variants}</span>}
              <span className="hb-price">{price}</span>
              <p>Available from the HOTBOX menu.</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function DealCarousel({ items }: { items: Deal[] }) {
  return (
    <Swiper
      className="hb-deal-carousel"
      spaceBetween={16}
      slidesPerView={1.08}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      grabCursor
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {items.map((item) => (
        <SwiperSlide key={item.name} className="mb-9">
          <DealCard deal={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function ReviewCarousel() {
  return (
    <Swiper
      className="hb-review-carousel"
      spaceBetween={16}
      slidesPerView={1.08}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 1.5 } }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4200, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      grabCursor
    >
      <SwiperSlide>
        <div className="hb-review-note">
          <strong>Food people name</strong>
          <span>
            Crown Crust Pizza, Zinger Cheese Burger and Loaded Fries are called out as standouts
            in the available review summary.
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hb-review-note">
          <strong>Service that feels local</strong>
          <span>
            The sampled themes describe staff as polite, friendly and attentive, with delivery
            noted as on time.
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hb-review-note">
          <strong>A relaxed stop</strong>
          <span>Review themes mention a nice atmosphere and aesthetic, relaxed vibes.</span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
