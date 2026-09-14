'use client';

import Link from 'next/link';
import { Heart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useWishlist } from '@/hooks/useWishlist';
import { products } from '@/data/products';
import { getProductWhatsAppUrl } from '@/data/store-info';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MessageCircle } from 'lucide-react';

export default function WishlistPage() {
  const { items, remove } = useWishlist();
  const wishlistProducts = products.filter((p) => items.includes(p.id));

  return (
    <div className="py-8 lg:py-16 min-h-[60vh]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-3xl lg:text-4xl">
            Your Saved Pieces
          </h1>
          {wishlistProducts.length > 0 && (
            <p className="mt-2 text-sm text-[var(--color-muted)]">{wishlistProducts.length} items saved</p>
          )}
        </div>

        {wishlistProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Heart size={48} strokeWidth={1} className="mx-auto text-[var(--color-neutral)] mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-obsidian)] mb-2">
              No saved pieces yet
            </h2>
            <p className="text-sm text-[var(--color-muted)] mb-6">
              Browse our collection and tap the heart icon to save pieces you love.
            </p>
            <Link href="/shop" className="btn btn-primary">
              Explore Jewellery
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {wishlistProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 lg:gap-6 bg-white p-4 items-center"
              >
                <Link href={`/jewellery/${product.slug}`} className="relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 overflow-hidden bg-[var(--color-surface-alt)]">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="96px" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/jewellery/${product.slug}`}>
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-obsidian)] hover:text-[var(--color-champagne)] transition-colors truncate">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-[var(--color-muted)] capitalize">{product.category}</p>
                  <p className="text-sm font-medium text-[var(--color-obsidian)] mt-1">{product.priceDisplay}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={getProductWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(product.name)}
                    className="p-2 text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                    aria-label="Enquire on WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <button
                    onClick={() => remove(product.id)}
                    className="p-2 text-[var(--color-muted)] hover:text-red-500 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
