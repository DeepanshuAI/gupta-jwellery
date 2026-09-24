'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductBySlug, getFeaturedProducts } from '@/data/products';
import { getProductWhatsAppUrl } from '@/data/store-info';
import { useWishlist } from '@/hooks/useWishlist';
import { trackWhatsAppClick, trackWishlistAdd } from '@/lib/analytics';
import { ProductCard } from '@/components/ProductCard';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { isInWishlist, toggle } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-ivory)]">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-obsidian)] mb-6">
            Piece Not Found
          </h1>
          <Link href="/shop" className="text-xs tracking-[0.15em] uppercase text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const isWished = isInWishlist(product.id);
  const relatedProducts = getFeaturedProducts().filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen pt-24 lg:pt-32 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-6">
        <nav className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
          <Link href="/shop" className="hover:text-[var(--color-obsidian)] transition-colors">Collection</Link>
          <span className="w-4 border-b border-[var(--color-muted)]"></span>
          <Link href={`/shop`} className="hover:text-[var(--color-obsidian)] transition-colors">
            {product.category === 'mens' ? "Men's" : product.category}
          </Link>
          <span className="w-4 border-b border-[var(--color-muted)]"></span>
          <span className="text-[var(--color-obsidian)]">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Layout */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 mt-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: Art Gallery Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative aspect-[4/5] bg-[var(--color-surface-alt)] overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-8">
                {product.images.slice(1, 3).map((img, i) => (
                  <div key={i} className="relative aspect-square bg-[var(--color-surface-alt)] overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} detail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* RIGHT: Curatorial Info */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-5 lg:sticky lg:top-32 lg:py-10"
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6">
              {product.category === 'mens' ? "Men's Edit" : product.category.charAt(0).toUpperCase() + product.category.slice(1) + " Collection"}
            </p>
            
            <h1 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl text-[var(--color-obsidian)] leading-[1.1] mb-6">
              {product.name}
            </h1>
            
            <p className="text-xl font-[family-name:var(--font-display)] text-[var(--color-champagne-dark)] italic mb-10">
              {product.priceDisplay}
            </p>
            
            <div className="space-y-6 text-[var(--color-muted)] font-light leading-relaxed max-w-md">
              <p>{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="mt-16 mb-16 max-w-md">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-obsidian)] mb-6 border-b border-[var(--color-border)] pb-4">Specifications</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Material', value: product.material },
                  { label: 'Purity', value: product.purity },
                  { label: 'Weight', value: product.weight },
                  { label: 'Stone', value: product.gemstone },
                  { label: 'Identifier', value: product.sku },
                ].map((attr) => (
                  <li key={attr.label} className="flex justify-between items-center text-sm font-light">
                    <span className="text-[var(--color-muted)]">{attr.label}</span>
                    <span className="text-[var(--color-obsidian)] text-right">{attr.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Area */}
            <div className="space-y-4 max-w-md">
              <a
                href={getProductWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(product.name)}
                className="w-full flex items-center justify-center gap-3 bg-[var(--color-obsidian)] text-white py-4 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-champagne-dark)] transition-colors duration-500"
              >
                <MessageCircle size={16} strokeWidth={1.5} /> Enquire with Concierge
              </a>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    toggle(product.id);
                    if (!isWished) trackWishlistAdd(product.name);
                  }}
                  className={`flex items-center justify-center gap-3 border border-[var(--color-obsidian)] py-4 text-xs tracking-[0.15em] uppercase transition-colors duration-500 ${isWished ? 'bg-[var(--color-obsidian)] text-white' : 'text-[var(--color-obsidian)] hover:bg-[var(--color-obsidian)] hover:text-white'}`}
                >
                  <Heart size={16} strokeWidth={1.5} className={isWished ? 'fill-current' : ''} />
                  {isWished ? 'Saved' : 'Save Piece'}
                </button>
                <Link 
                  href="/appointment" 
                  className="flex items-center justify-center gap-3 border border-[var(--color-border)] py-4 text-xs tracking-[0.15em] uppercase text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors duration-500"
                >
                  <Calendar size={16} strokeWidth={1.5} /> View in Person
                </Link>
              </div>
            </div>

            {/* Subtle Location Hint */}
            <div className="mt-12 flex items-center gap-3 text-[10px] tracking-[0.1em] uppercase text-[var(--color-muted)]">
              <MapPin size={12} /> Available at Kurukshetra Showroom
            </div>
            
          </motion.div>
        </div>
      </div>

      {/* Related Curation */}
      {relatedProducts.length > 0 && (
        <section className="mt-32 lg:mt-48 max-w-[1600px] mx-auto px-6 lg:px-10 border-t border-[var(--color-border)] pt-24">
          <div className="text-center lg:text-left mb-16">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-4">Curated For You</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl text-[var(--color-obsidian)]">Related Pieces</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
