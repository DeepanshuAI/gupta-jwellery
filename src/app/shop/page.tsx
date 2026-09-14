'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

const materials = ['Gold', 'Diamond', 'Silver', 'Gemstone'];
const styles = ['Traditional', 'Contemporary', 'Minimal', 'Bridal', 'Statement', 'Everyday'];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedMaterial !== 'all' && !p.material.toLowerCase().includes(selectedMaterial.toLowerCase())) return false;
      if (selectedStyle !== 'all' && !p.style.includes(selectedStyle.toLowerCase())) return false;
      return true;
    });
  }, [selectedCategory, selectedMaterial, selectedStyle]);

  const hasFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || selectedStyle !== 'all';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-[0.12em] uppercase text-[var(--color-charcoal)] font-medium mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-[var(--color-champagne)] font-medium' : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'}`}
          >
            All Jewellery
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-[var(--color-champagne)] font-medium' : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.12em] uppercase text-[var(--color-charcoal)] font-medium mb-4">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('all')}
            className={`block text-sm transition-colors ${selectedMaterial === 'all' ? 'text-[var(--color-champagne)] font-medium' : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'}`}
          >
            All Materials
          </button>
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`block text-sm transition-colors ${selectedMaterial === m ? 'text-[var(--color-champagne)] font-medium' : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Style */}
      <div>
        <h3 className="text-xs tracking-[0.12em] uppercase text-[var(--color-charcoal)] font-medium mb-4">Style</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedStyle('all')}
            className={`block text-sm transition-colors ${selectedStyle === 'all' ? 'text-[var(--color-champagne)] font-medium' : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'}`}
          >
            All Styles
          </button>
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedStyle(s.toLowerCase())}
              className={`block text-sm transition-colors ${selectedStyle === s.toLowerCase() ? 'text-[var(--color-champagne)] font-medium' : 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-4 pb-16 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Explore Jewellery"
          subtitle="Discover pieces for everyday elegance, celebrations and special moments."
        />

        {/* Mobile filter toggle */}
        <div className="lg:hidden flex items-center justify-between mb-6">
          <p className="text-sm text-[var(--color-muted)]">{filtered.length} pieces</p>
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)]"
          >
            <SlidersHorizontal size={16} /> Filter & Sort
          </button>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
              {hasFilters && (
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); setSelectedStyle('all'); }}
                  className="mt-6 text-xs tracking-[0.06em] uppercase text-[var(--color-champagne)] font-medium hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--color-muted)]">{filtered.length} pieces</p>
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[var(--color-muted)]">No jewellery found matching your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); setSelectedStyle('all'); }}
                  className="btn btn-ghost mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--color-obsidian)]/40"
            onClick={() => setMobileFiltersOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[var(--color-ivory)] p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-sm tracking-[0.12em] uppercase font-medium">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                  <X size={20} />
                </button>
              </div>
              <FilterContent />
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn btn-primary w-full mt-8"
              >
                Show {filtered.length} Results
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
