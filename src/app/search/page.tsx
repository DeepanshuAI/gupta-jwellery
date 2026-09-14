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
    <div className="py-8 lg:py-16 min-h-[60vh]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-3xl lg:text-4xl text-center mb-8">
            Search
          </h1>
          <div className="relative">
            <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for jewellery..."
              autoFocus
              className="w-full pl-12 pr-4 py-4 border-b-2 border-[var(--color-obsidian)] bg-transparent text-lg focus:border-[var(--color-champagne)] focus:outline-none transition-colors font-[family-name:var(--font-display)]"
            />
          </div>
          {query.length < 2 && (
            <div className="mt-6">
              <p className="text-xs tracking-[0.08em] uppercase text-[var(--color-muted)] font-medium mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-4 py-2 text-sm border border-[var(--color-border)] text-[var(--color-charcoal)] hover:border-[var(--color-champagne)] hover:text-[var(--color-champagne)] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs tracking-[0.08em] uppercase text-[var(--color-muted)] font-medium mb-4">Browse Categories</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.filter((c) => c.featured).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop/${cat.slug}`}
                      className="p-4 bg-white text-center hover:shadow-sm transition-shadow"
                    >
                      <span className="text-sm font-medium text-[var(--color-charcoal)]">{cat.name}</span>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-[var(--color-muted)] mb-6">
              {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
            </p>
            {results.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {results.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-muted)] mb-4">No jewellery found for your search.</p>
                <Link href="/shop" className="btn btn-ghost">Browse All Jewellery</Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
