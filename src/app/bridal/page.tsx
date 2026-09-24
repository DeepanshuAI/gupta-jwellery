'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { getProductsByCollection } from '@/data/products';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function BridalPage() {
  const bridalProducts = getProductsByCollection('bridal');

  return (
    <div className="bg-[var(--color-obsidian)] text-[var(--color-ivory)] overflow-hidden">
      {/* 1. CINEMATIC BRIDAL HERO */}
      <section className="relative h-[100svh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image 
            src="/images/editorial/bridal-hero.jpg" 
            alt="Radhika Jewellery Bridal" 
            fill 
            className="object-cover object-top" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-obsidian)]/70 via-transparent to-[var(--color-obsidian)]" />
        </motion.div>
        
        <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-champagne)] mb-8"
          >
            The Bridal Edit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-9xl text-white tracking-tight leading-[1]"
          >
            For the beginning<br/>
            <span className="italic text-[var(--color-champagne-light)] tracking-normal">of forever.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <div className="w-px h-16 bg-gradient-to-b from-[var(--color-champagne)] to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 2. THE EMOTION */}
      <section className="py-32 lg:py-48 px-6 md:px-10 lg:px-16">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.p 
            {...fadeUp}
            className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-[var(--color-ivory)]"
          >
            Your wedding day is a tapestry of moments. Our bridal jewellery is designed to be the golden thread running through them all.
          </motion.p>
        </div>
      </section>

      {/* 3. THE ATELIER (Gallery) */}
      <section className="pb-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:col-span-7 relative aspect-[4/5] bg-[var(--color-charcoal)] overflow-hidden"
            >
              <Image src="/images/products/necklace-1.jpg" alt="Bridal Detail" fill className="object-cover" />
            </motion.div>
            <div className="lg:col-span-5 grid grid-rows-2 gap-6 lg:gap-10">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative bg-[var(--color-charcoal)] overflow-hidden flex flex-col justify-center p-12 lg:p-16"
              >
                <h3 className="font-[family-name:var(--font-display)] text-4xl mb-6 text-[var(--color-champagne-light)]">Heritage Meets Contemporary</h3>
                <p className="text-[var(--color-neutral)] font-light opacity-80 leading-relaxed">
                  We blend centuries-old Indian craftsmanship with modern sensibilities, ensuring your bridal jewellery feels both timeless and uniquely yours.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative bg-[var(--color-charcoal)] overflow-hidden"
              >
                <Image src="/images/products/ring-1.jpg" alt="Craftsmanship" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BRIDAL COLLECTION */}
      <section className="py-24 lg:py-32 bg-[var(--color-ivory)] text-[var(--color-obsidian)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-[var(--color-obsidian)] pb-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-4">The Collection</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl text-[var(--color-obsidian)]">Bridal Masterpieces</h2>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16">
            {bridalProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/shop/${product.slug}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface-alt)] mb-6">
                    <Image 
                      src={product.images[0]} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-obsidian)] group-hover:text-[var(--color-champagne-dark)] transition-colors line-clamp-1">{product.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION */}
      <section className="py-32 lg:py-48 px-6 md:px-10 lg:px-16 bg-[var(--color-obsidian)] text-center">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-8">Personal Consultation</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.2] mb-8 text-[var(--color-ivory)]">
            Let us help you curate your perfect bridal trousseau.
          </h2>
          <p className="text-[var(--color-neutral)] font-light opacity-80 leading-relaxed mb-12">
            Visit our Kurukshetra showroom for an exclusive, unhurried bridal consultation where our experts will guide you through our collections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/appointment" className="group flex items-center justify-center gap-3 text-xs tracking-[0.15em] uppercase text-[var(--color-ivory)] border-b border-[var(--color-ivory)] pb-2 hover:text-[var(--color-champagne)] hover:border-[var(--color-champagne)] transition-colors">
              Book Consultation
            </Link>
            <a href="https://wa.me/919896007477?text=Hello%20Radhika%20Jewellery%2C%20I%27m%20looking%20for%20bridal%20jewellery." target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 text-xs tracking-[0.15em] uppercase text-[var(--color-champagne)] border-b border-[var(--color-champagne)] pb-2 hover:text-white hover:border-white transition-colors">
              WhatsApp Concierge
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
