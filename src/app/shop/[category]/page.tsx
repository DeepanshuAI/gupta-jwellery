'use client';

import { use } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductCard } from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const cat = getCategoryBySlug(category);
  const products = getProductsByCategory(category);

  if (!cat) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-4">Category Not Found</h1>
          <Link href="/shop" className="btn btn-primary">Browse All Jewellery</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading title={cat.name} subtitle={cat.description} />
        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[var(--color-muted)]">No products in this category yet.</p>
            <Link href="/shop" className="btn btn-ghost mt-4">Browse All Jewellery</Link>
          </div>
        )}
      </div>
    </div>
  );
}
