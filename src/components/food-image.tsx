export const foodImages = {
  burger: '/images/hotbox-burger.jpg',
  pizza: '/images/hotbox-pizza.jpg',
  chicken: '/images/hotbox-chicken.jpg',
  fries: '/images/hotbox-fries.jpg',
} as const;

export function FoodImage({
  label,
  src,
  className = '',
}: {
  label: string;
  src: string;
  className?: string;
}) {
  return (
    <div className={`hb-food-image ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={label} loading="lazy" />
    </div>
  );
}
