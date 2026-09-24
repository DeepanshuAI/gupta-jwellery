'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

const materials = ['Gold', 'Diamond', 'Silver', 'Gemstone'];
const styles = ['Traditional', 'Contemporary', 'Minimal', 'Bridal', 'Statement', 'Everyday'];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

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
    <div className="space-y-12">
      {/* Category */}
      <div>
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-obsidian)] font-medium mb-6">Category</h3>
        <div className="space-y-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-xs tracking-[0.05em] transition-colors font-light ${selectedCategory === 'all' ? 'text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 inline-block' : 'text-[var(--color-muted)] hover:text-[var(--color-obsidian)]'}`}
          >
            All Pieces
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-xs tracking-[0.05em] transition-colors font-light ${selectedCategory === cat.id ? 'text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 inline-block' : 'text-[var(--color-muted)] hover:text-[var(--color-obsidian)]'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-obsidian)] font-medium mb-6">Material</h3>
        <div className="space-y-4">
          <button
            onClick={() => setSelectedMaterial('all')}
            className={`block text-xs tracking-[0.05em] transition-colors font-light ${selectedMaterial === 'all' ? 'text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 inline-block' : 'text-[var(--color-muted)] hover:text-[var(--color-obsidian)]'}`}
          >
            All Materials
          </button>
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`block text-xs tracking-[0.05em] transition-colors font-light ${selectedMaterial === m ? 'text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 inline-block' : 'text-[var(--color-muted)] hover:text-[var(--color-obsidian)]'}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Style */}
      <div>
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-obsidian)] font-medium mb-6">Style</h3>
        <div className="space-y-4">
          <button
            onClick={() => setSelectedStyle('all')}
            className={`block text-xs tracking-[0.05em] transition-colors font-light ${selectedStyle === 'all' ? 'text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 inline-block' : 'text-[var(--color-muted)] hover:text-[var(--color-obsidian)]'}`}
          >
            All Styles
          </button>
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedStyle(s.toLowerCase())}
              className={`block text-xs tracking-[0.05em] transition-colors font-light ${selectedStyle === s.toLowerCase() ? 'text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 inline-block' : 'text-[var(--color-muted)] hover:text-[var(--color-obsidian)]'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen pt-24 lg:pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6"
          >
            The Boutique
          </motion.p>
          <motion.h1 
            {...fadeUp}
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-obsidian)] leading-[1.1]"
          >
            Curated pieces for <br className="hidden md:block" />
            <span className="italic text-[var(--color-champagne-dark)]">your private collection.</span>
          </motion.h1>
        </div>

        {/* Mobile filter toggle */}
        <div className="lg:hidden flex items-center justify-between mb-10 border-b border-[var(--color-border)] pb-4">
          <p className="text-xs tracking-[0.1em] text-[var(--color-muted)] uppercase font-light">{filtered.length} pieces</p>
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-medium text-[var(--color-obsidian)]"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>

        <div className="flex gap-16 xl:gap-24">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-32">
              {FilterContent()}
              {hasFilters && (
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); setSelectedStyle('all'); }}
                  className="mt-12 text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] border-b border-[var(--color-muted)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors"
                >
                  Clear Adjustments
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-end mb-10 border-b border-[var(--color-border)] pb-4">
              <p className="text-[10px] tracking-[0.2em] text-[var(--color-muted)] uppercase font-light">{filtered.length} Curated Pieces</p>
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32">
                <p className="text-lg text-[var(--color-muted)] font-light mb-8">No pieces found matching your current curation.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); setSelectedStyle('all'); }}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-champagne-dark)] border-b border-[var(--color-champagne-dark)] pb-1 hover:text-[var(--color-obsidian)] hover:border-[var(--color-obsidian)] transition-colors"
                >
                  Reset Collection
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
            className="fixed inset-0 z-[100] bg-[var(--color-obsidian)]/80 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-[var(--color-ivory)] p-8 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-[var(--color-obsidian)]">Curation</h2>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-[var(--color-obsidian)]">
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              {FilterContent()}
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-[var(--color-obsidian)] text-white py-4 mt-12 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-champagne-dark)] transition-colors"
              >
                View {filtered.length} Pieces
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
