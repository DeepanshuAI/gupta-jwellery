'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';
import { useWishlist } from '@/hooks/useWishlist';
import { trackWishlistAdd } from '@/lib/analytics';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { isInWishlist, toggle } = useWishlist();
  const isWished = isInWishlist(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1, delay: (index % 3) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-alt)] mb-6">
        <Link href={`/jewellery/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
        </Link>
        
        {/* Wishlist Button - Only visible on hover or if wished */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(product.id);
            if (!isWished) trackWishlistAdd(product.name);
          }}
          className={`absolute top-4 right-4 z-10 p-3 bg-white/90 backdrop-blur-sm transition-all duration-500 rounded-full ${isWished ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'}`}
          aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            size={14}
            strokeWidth={1.5}
            className={`transition-colors duration-300 ${isWished ? 'fill-[var(--color-obsidian)] text-[var(--color-obsidian)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-obsidian)] hover:fill-[var(--color-obsidian)]'}`}
          />
        </button>
      </div>

      {/* Editorial Product Info */}
      <div className="flex flex-col items-center text-center space-y-3">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
          {product.category === 'mens' ? "Men's" : product.category}
        </p>
        <Link href={`/jewellery/${product.slug}`}>
          <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl text-[var(--color-obsidian)] group-hover:text-[var(--color-champagne-dark)] transition-colors duration-500 leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-light text-[var(--color-muted)] italic font-[family-name:var(--font-display)]">
          {product.priceDisplay}
        </p>
      </div>
    </motion.article>
  );
}
