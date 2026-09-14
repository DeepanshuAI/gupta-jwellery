'use client';

import Link from 'next/link';
import { Home, ShoppingBag, Search, Heart, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, getCallUrl } from '@/data/store-info';
import { trackWhatsAppClick, trackCallClick } from '@/lib/analytics';

export function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[var(--color-border)]">
      {/* Quick action row */}
      <div className="flex border-b border-[var(--color-border)]">
        <a
          href={getWhatsAppUrl('Hello Gupta Jwellery, I would like to enquire about your jewellery collection.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick()}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white text-xs font-medium tracking-wide uppercase"
        >
          <MessageCircle size={16} strokeWidth={1.5} />
          WhatsApp
        </a>
        <a
          href={getCallUrl()}
          onClick={() => trackCallClick()}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[var(--color-obsidian)] text-white text-xs font-medium tracking-wide uppercase"
        >
          <Phone size={16} strokeWidth={1.5} />
          Call Store
        </a>
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-around py-2">
        <Link href="/" className="flex flex-col items-center gap-0.5 text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors p-1">
          <Home size={20} strokeWidth={1.5} />
          <span className="text-[10px] tracking-wide uppercase">Home</span>
        </Link>
        <Link href="/shop" className="flex flex-col items-center gap-0.5 text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors p-1">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="text-[10px] tracking-wide uppercase">Shop</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center gap-0.5 text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors p-1">
          <Search size={20} strokeWidth={1.5} />
          <span className="text-[10px] tracking-wide uppercase">Search</span>
        </Link>
        <Link href="/wishlist" className="flex flex-col items-center gap-0.5 text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors p-1">
          <Heart size={20} strokeWidth={1.5} />
          <span className="text-[10px] tracking-wide uppercase">Wishlist</span>
        </Link>
      </div>
    </div>
  );
}
