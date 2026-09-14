'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle, Phone, Calendar, MapPin, Shield, HeartHandshake, Check, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductBySlug, getFeaturedProducts } from '@/data/products';
import { getProductWhatsAppUrl, getCallUrl, getWhatsAppUrl } from '@/data/store-info';
import { useWishlist } from '@/hooks/useWishlist';
import { trackWhatsAppClick, trackCallClick, trackWishlistAdd } from '@/lib/analytics';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeading } from '@/components/SectionHeading';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { isInWishlist, toggle } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-4">
            Product Not Found
          </h1>
          <Link href="/shop" className="btn btn-primary">
            Browse Jewellery
          </Link>
        </div>
      </div>
    );
  }

  const isWished = isInWishlist(product.id);
  const relatedProducts = getFeaturedProducts().filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pb-16 lg:pb-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
        <nav className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-charcoal)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[var(--color-charcoal)] transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-[var(--color-charcoal)] transition-colors capitalize">
            {product.category === 'mens' ? "Men's" : product.category}
          </Link>
          <span>/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative aspect-square bg-[var(--color-surface-alt)] overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:py-4"
          >
            <Link href="/shop" className="inline-flex items-center gap-1.5 text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] hover:text-[var(--color-charcoal)] transition-colors mb-4">
              <ArrowLeft size={14} /> Back to Shop
            </Link>

            <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium mb-2">
              {product.category === 'mens' ? "Men's" : product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl text-[var(--color-obsidian)] leading-tight">
              {product.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-[var(--color-obsidian)]">
              {product.priceDisplay}
            </p>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              {product.description}
            </p>

            {/* Attributes */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: 'Material', value: product.material },
                { label: 'Purity', value: product.purity },
                { label: 'Weight', value: product.weight },
                { label: 'Stone', value: product.gemstone },
                { label: 'SKU', value: product.sku },
                { label: 'Availability', value: product.availability === 'in-stock' ? 'In Stock' : product.availability === 'made-to-order' ? 'Made to Order' : 'Enquire' },
              ].map((attr) => (
                <div key={attr.label} className="py-2 border-b border-[var(--color-border)]">
                  <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-muted)]">{attr.label}</p>
                  <p className="text-sm text-[var(--color-charcoal)] mt-0.5">{attr.value}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 space-y-3">
              <a
                href={getProductWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(product.name)}
                className="btn btn-whatsapp w-full"
              >
                <MessageCircle size={18} /> Enquire on WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/appointment" className="btn btn-primary">
                  <Calendar size={16} /> Book Appointment
                </Link>
                <a href={getCallUrl()} onClick={() => trackCallClick()} className="btn btn-secondary">
                  <Phone size={16} /> Call Store
                </a>
              </div>
              <button
                onClick={() => {
                  toggle(product.id);
                  if (!isWished) trackWishlistAdd(product.name);
                }}
                className={`btn w-full ${isWished ? 'btn-champagne' : 'btn-secondary'}`}
              >
                <Heart size={16} className={isWished ? 'fill-current' : ''} />
                {isWished ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Trust Panel */}
            <div className="mt-8 p-5 bg-[var(--color-surface-alt)] space-y-3">
              {[
                { icon: Shield, text: 'Quality Assured' },
                { icon: HeartHandshake, text: 'Personal Assistance' },
                { icon: MapPin, text: 'Visit Our Store' },
                { icon: Check, text: 'Secure Purchase Guidance' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon size={16} className="text-[var(--color-champagne)]" />
                  <span className="text-sm text-[var(--color-charcoal)]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Try it in Store */}
            <div className="mt-6 p-5 border border-[var(--color-border)]">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-obsidian)] mb-1">
                See It In Person
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-3">
                Love this design? Visit our Kurukshetra showroom to see it up close.
              </p>
              <Link href="/store" className="btn btn-ghost text-sm">
                Plan My Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 lg:mt-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionHeading title="You May Also Love" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
