import Image from 'next/image';

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
  sizes = '100vw',
  priority = false,
}: {
  label: string;
  src: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`hb-food-image ${className}`}>
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
