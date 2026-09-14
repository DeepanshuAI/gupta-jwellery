'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductCard } from '@/components/ProductCard';
import { getCollectionBySlug } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';

export default function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const collection = getCollectionBySlug(slug);
  const products = getProductsByCollection(slug);

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-4">Collection Not Found</h1>
          <Link href="/collections" className="btn btn-primary">Browse Collections</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={collection.image} alt={collection.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[var(--color-obsidian)]/50" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium mb-3">
            {collection.tagline}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-display)] text-[var(--color-ivory)] text-4xl lg:text-5xl">
            {collection.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-3 text-[var(--color-neutral)] max-w-md">
            {collection.description}
          </motion.p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--color-muted)]">This collection is coming soon.</p>
              <Link href="/shop" className="btn btn-ghost mt-4">Browse All Jewellery</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
