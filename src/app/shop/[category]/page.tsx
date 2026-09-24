'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const cat = getCategoryBySlug(category);
  const products = getProductsByCategory(category);

  if (!cat) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[var(--color-ivory)]">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-obsidian)] mb-6">Collection Not Found</h1>
          <Link href="/shop" className="text-xs tracking-[0.15em] uppercase text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors">Return to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen pt-24 lg:pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6"
          >
            Curated Category
          </motion.p>
          <motion.h1 
            {...fadeUp}
            className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--color-obsidian)] mb-6 leading-[1.1]"
          >
            {cat.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-[var(--color-muted)] font-light text-lg"
          >
            {cat.description}
          </motion.p>
        </div>

        <div className="flex justify-end items-end border-b border-[var(--color-border)] pb-4 mb-12">
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
          <div className="text-center py-32 border-t border-[var(--color-border)]">
            <p className="text-lg text-[var(--color-muted)] font-light mb-8">This collection is currently being updated.</p>
            <Link href="/shop" className="text-xs tracking-[0.15em] uppercase text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors">
              Explore Other Pieces
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
