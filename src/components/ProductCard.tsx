'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';
import { getProductWhatsAppUrl } from '@/data/store-info';
import { useWishlist } from '@/hooks/useWishlist';
import { trackWhatsAppClick, trackWishlistAdd } from '@/lib/analytics';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { isInWishlist, toggle } = useWishlist();
  const isWished = isInWishlist(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Image Container */}
      <Link href={`/jewellery/${product.slug}`} className="block relative overflow-hidden bg-[var(--color-surface-alt)] aspect-[3/4]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--color-obsidian)]/0 group-hover:bg-[var(--color-obsidian)]/10 transition-colors duration-500" />
        {/* View Details on hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          <span className="inline-flex items-center gap-2 text-white text-xs tracking-[0.08em] uppercase font-medium">
            View Details <ArrowRight size={14} strokeWidth={1.5} />
          </span>
        </div>
      </Link>

      {/* Wishlist Button */}
      <button
        onClick={() => {
          toggle(product.id);
          if (!isWished) trackWishlistAdd(product.name);
        }}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart
          size={18}
          strokeWidth={1.5}
          className={`transition-colors ${isWished ? 'fill-[var(--color-champagne)] text-[var(--color-champagne)]' : 'text-[var(--color-charcoal)]'}`}
        />
      </button>

      {/* Product Info */}
      <div className="mt-4 space-y-1.5">
        <p className="text-[10px] tracking-[0.14em] uppercase text-[var(--color-muted)] font-medium">
          {product.category === 'mens' ? "Men's" : product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <Link href={`/jewellery/${product.slug}`}>
          <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-charcoal)] group-hover:text-[var(--color-champagne)] transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[var(--color-charcoal)] font-medium">
          {product.priceDisplay}
        </p>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={getProductWhatsAppUrl(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(product.name)}
        className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.06em] uppercase text-[var(--color-charcoal)] hover:text-[#25D366] transition-colors font-medium"
      >
        <MessageCircle size={14} strokeWidth={1.5} />
        Enquire on WhatsApp
      </a>
    </motion.article>
  );
}
