'use client';

import Link from 'next/link';
import { Heart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useWishlist } from '@/hooks/useWishlist';
import { products } from '@/data/products';
import { getProductWhatsAppUrl } from '@/data/store-info';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MessageCircle } from 'lucide-react';

export default function WishlistPage() {
  const { items, remove } = useWishlist();
  const wishlistProducts = products.filter((p) => items.includes(p.id));

  return (
    <div className="bg-[var(--color-ivory)] pt-24 lg:pt-32 pb-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6">Personal Collection</p>
          <h1 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-4xl lg:text-5xl">
            Saved Pieces
          </h1>
        </div>

        {wishlistProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center py-24 border-t border-[var(--color-border)]"
          >
            <Heart size={32} strokeWidth={1} className="mx-auto text-[var(--color-muted)] mb-8 opacity-50" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-4">
              Your collection is empty
            </h2>
            <p className="text-sm text-[var(--color-muted)] font-light mb-10">
              Explore our boutique and select pieces you wish to save for later.
            </p>
            <Link href="/shop" className="text-xs tracking-[0.15em] uppercase text-[var(--color-obsidian)] border-b border-[var(--color-obsidian)] pb-1 hover:text-[var(--color-champagne-dark)] hover:border-[var(--color-champagne-dark)] transition-colors">
              Explore Collection
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-[var(--color-border)] pb-4 mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)]">Pieces</h2>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
                {wishlistProducts.length} item{wishlistProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {wishlistProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col sm:flex-row gap-6 lg:gap-10 p-6 bg-[var(--color-surface)] border border-[var(--color-border)] items-center group"
              >
                <Link href={`/jewellery/${product.slug}`} className="relative w-32 h-40 flex-shrink-0 overflow-hidden bg-[var(--color-surface-alt)]">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="128px" />
                </Link>
                
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-2">
                    {product.category === 'mens' ? "Men's" : product.category}
                  </p>
                  <Link href={`/jewellery/${product.slug}`}>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] hover:text-[var(--color-champagne-dark)] transition-colors truncate">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-[family-name:var(--font-display)] text-[var(--color-obsidian)] mt-2 italic">{product.priceDisplay}</p>
                </div>
                
                <div className="flex sm:flex-col items-center gap-6 sm:gap-4 flex-shrink-0 mt-4 sm:mt-0">
                  <a
                    href={getProductWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(product.name)}
                    className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-[var(--color-obsidian)] hover:text-[var(--color-champagne-dark)] transition-colors border-b border-transparent hover:border-[var(--color-champagne-dark)] pb-1"
                  >
                    <MessageCircle size={14} strokeWidth={1.5} /> Enquire
                  </a>
                  <button
                    onClick={() => remove(product.id)}
                    className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-[var(--color-muted)] hover:text-red-900 transition-colors"
                  >
                    <Trash2 size={14} strokeWidth={1.5} /> Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
