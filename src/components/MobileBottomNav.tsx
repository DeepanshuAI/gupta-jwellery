'use client';

import Link from 'next/link';
import { Home, ShoppingBag, Search, Heart, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, getCallUrl } from '@/data/store-info';
import { trackWhatsAppClick, trackCallClick } from '@/lib/analytics';

export function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-ivory)]/95 backdrop-blur-md border-t border-[var(--color-border)]">
      {/* Quick action row */}
      <div className="flex border-b border-[var(--color-border)]">
        <a
          href={getWhatsAppUrl('Hello Radhika Jewellery, I would like to enquire about your jewellery collection.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick()}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--color-obsidian)] text-white text-[10px] tracking-[0.15em] uppercase hover:bg-[var(--color-champagne-dark)] transition-colors"
        >
          <MessageCircle size={14} strokeWidth={1.5} />
          Concierge
        </a>
        <a
          href={getCallUrl()}
          onClick={() => trackCallClick()}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-[var(--color-obsidian)] text-[10px] tracking-[0.15em] uppercase hover:bg-[var(--color-surface-alt)] transition-colors"
        >
          <Phone size={14} strokeWidth={1.5} />
          Boutique
        </a>
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-around py-3">
        <Link href="/" className="flex flex-col items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-obsidian)] transition-colors p-1">
          <Home size={18} strokeWidth={1.5} />
          <span className="text-[9px] tracking-[0.15em] uppercase">Home</span>
        </Link>
        <Link href="/shop" className="flex flex-col items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-obsidian)] transition-colors p-1">
          <ShoppingBag size={18} strokeWidth={1.5} />
          <span className="text-[9px] tracking-[0.15em] uppercase">Shop</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-obsidian)] transition-colors p-1">
          <Search size={18} strokeWidth={1.5} />
          <span className="text-[9px] tracking-[0.15em] uppercase">Search</span>
        </Link>
        <Link href="/wishlist" className="flex flex-col items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-obsidian)] transition-colors p-1">
          <Heart size={18} strokeWidth={1.5} />
          <span className="text-[9px] tracking-[0.15em] uppercase">Saved</span>
        </Link>
      </div>
    </div>
  );
}
