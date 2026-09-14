'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductCard } from '@/components/ProductCard';
import { getProductsByCollection } from '@/data/products';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7 },
};

export default function BridalPage() {
  const bridalProducts = getProductsByCollection('bridal');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/editorial/bridal-hero.jpg" alt="Bridal Jewellery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[var(--color-obsidian)]/50" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium mb-4"
          >
            Bridal Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[family-name:var(--font-display)] text-[var(--color-ivory)] text-4xl lg:text-6xl"
          >
            Your Bridal Story Starts Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 text-[var(--color-neutral)] max-w-md mx-auto"
          >
            Jewellery crafted to make your most celebrated moments unforgettable.
          </motion.p>
        </div>
      </section>

      {/* Build Your Bridal Look */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            title="Build Your Bridal Look"
            subtitle="A personal journey to finding your perfect bridal jewellery."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: '01', title: 'Choose Your Style', desc: 'Traditional, contemporary or a blend of both.' },
              { step: '02', title: 'Explore Jewellery', desc: 'Browse our bridal necklaces, earrings, bangles and more.' },
              { step: '03', title: 'Book a Consultation', desc: 'Visit our showroom for a personal bridal experience.' },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="text-center">
                <span className="text-3xl font-[family-name:var(--font-display)] text-[var(--color-champagne)]">{item.step}</span>
                <h3 className="font-[family-name:var(--font-display)] text-xl mt-3 text-[var(--color-obsidian)]">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/appointment" className="btn btn-champagne">
              Book Bridal Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Bridal Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading title="Bridal Jewellery" subtitle="Necklaces, earrings, bangles, maang tikka and complete sets." />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {bridalProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[var(--color-surface-alt)] text-center">
        <div className="max-w-lg mx-auto px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-2xl lg:text-3xl">
              Let Us Help You Find the Perfect Set
            </h2>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Our team is here to guide you through choosing jewellery for your most important day.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/appointment" className="btn btn-primary">Book Consultation</Link>
              <a href="https://wa.me/919896007477?text=Hello%20Gupta%20Jwellery%2C%20I%27m%20looking%20for%20bridal%20jewellery." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">WhatsApp Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
