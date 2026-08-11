import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/hotbox';

export function OrderButton({
  label = 'Order on WhatsApp',
  variant = 'hb-button-primary',
  className = '',
}: {
  label?: string;
  variant?: string;
  className?: string;
}) {
  return (
    <a
      data-testid={`link-whatsapp-${label.toLowerCase().replaceAll(' ', '-')}`}
      className={`hb-button ${variant} ${className}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={27} /> {label}
    </a>
  );
}
