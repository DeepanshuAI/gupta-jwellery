'use client';

import { useState, useMemo } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { searchProducts } from '@/data/products';
import { categories } from '@/data/categories';
import { trackSearch } from '@/lib/analytics';
import Link from 'next/link';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (query.length < 2) return [];
    trackSearch(query);
    return searchProducts(query);
  }, [query]);

  const suggestions = ['Gold ring', 'Bridal necklace', 'Diamond earrings', "Men's chain", 'Wedding jewellery', 'Gift'];

  return (
    <div className="bg-[var(--color-ivory)] pt-24 lg:pt-32 pb-24 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Search Input */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6">Explore</p>
          <h1 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-5xl lg:text-6xl mb-12">
            Find Your Piece
          </h1>
          <div className="relative">
            <SearchIcon size={24} strokeWidth={1.5} className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--color-obsidian)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search our collections..."
              autoFocus
              className="w-full pl-12 pr-4 py-4 border-b border-[var(--color-obsidian)] bg-transparent text-xl focus:border-[var(--color-obsidian)] focus:outline-none transition-colors font-light placeholder:text-[var(--color-muted)]"
            />
          </div>
          
          {query.length < 2 && (
            <div className="mt-12 text-left space-y-16">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-6">Suggested Searches</p>
                <div className="flex flex-wrap gap-4">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="px-6 py-3 text-xs tracking-[0.05em] border border-[var(--color-border)] text-[var(--color-charcoal)] hover:border-[var(--color-obsidian)] transition-colors font-light bg-[var(--color-surface)]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-6">Collections</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.filter((c) => c.featured).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop/${cat.slug}`}
                      className="p-6 bg-[var(--color-surface)] text-center hover:bg-[var(--color-surface-alt)] transition-colors border border-[var(--color-border)]"
                    >
                      <span className="text-xs tracking-[0.1em] uppercase text-[var(--color-obsidian)]">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {query.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex justify-between items-end border-b border-[var(--color-border)] pb-4 mb-12">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-obsidian)]">Results</h2>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
                {results.length} piece{results.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16">
                {results.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-lg text-[var(--color-muted)] font-light mb-8">No pieces found matching your search.</p>
                <button onClick={() => setQuery('')} className="text-xs tracking-[0.15em] uppercase text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors">
                  Clear Search
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
