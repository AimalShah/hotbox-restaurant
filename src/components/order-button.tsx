import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/hotbox';

export function OrderButton({
  label = 'Order on WhatsApp',
  className = 'hb-button-primary',
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      data-testid={`link-whatsapp-${label.toLowerCase().replaceAll(' ', '-')}`}
      className={`hb-button ${className}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={17} /> {label}
    </a>
  );
}
