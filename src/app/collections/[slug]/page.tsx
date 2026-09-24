'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { getCollectionBySlug } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';


export default function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const collection = getCollectionBySlug(slug);
  const products = getProductsByCollection(slug);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-ivory)]">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-obsidian)] mb-4">Collection Not Found</h1>
          <Link href="/collections" className="text-xs tracking-[0.15em] uppercase text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors">Return to Worlds</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-ivory)] overflow-hidden">
      {/* Cinematic Hero */}
      <section className="relative h-[80svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={collection.image} alt={collection.name} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/80 via-[var(--color-obsidian)]/30 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-champagne)] mb-8"
          >
            {collection.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-9xl text-white tracking-tight leading-[1]"
          >
            {collection.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-[var(--color-neutral)] max-w-xl font-light text-lg mx-auto leading-relaxed"
          >
            {collection.description}
          </motion.p>
        </div>
      </section>

      {/* Collection Products */}
      <section className="py-24 lg:py-32 bg-[var(--color-ivory)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          
          <div className="flex justify-between items-end border-b border-[var(--color-border)] pb-4 mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-obsidian)]">The Pieces</h2>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
              {products.length} piece{products.length !== 1 ? 's' : ''}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-lg text-[var(--color-muted)] font-light mb-8">This collection is currently being curated.</p>
              <Link href="/shop" className="text-xs tracking-[0.15em] uppercase text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors">
                Explore Main Collection
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
