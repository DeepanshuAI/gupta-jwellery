'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-ivory)] overflow-hidden pt-20 lg:pt-32">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="px-6 lg:px-10 py-12 lg:py-24 max-w-[1400px] mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6"
        >
          Our Heritage
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-5xl md:text-7xl lg:text-8xl leading-[1.1] max-w-4xl mx-auto"
        >
          A name passed from <span className="italic text-[var(--color-champagne-dark)]">one generation</span> to another.
        </motion.h1>
      </section>

      {/* 2. ARCHIVAL IMMERSION */}
      <section className="relative px-6 lg:px-10 max-w-[1600px] mx-auto mb-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-8 relative aspect-[4/3] overflow-hidden bg-[var(--color-charcoal)]"
          >
            {/* Main large image */}
            <Image src="/images/products/bangle-1.jpg" alt="Radhika Jewellery Heritage" fill className="object-cover sepia-[.2] contrast-[1.1]" sizes="(max-width: 1024px) 100vw, 66vw" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 lg:mt-32 relative aspect-[3/4] overflow-hidden bg-[var(--color-surface-alt)]"
          >
            {/* Secondary image overlapping slightly on desktop if positioned right */}
            <Image src="/images/products/ring-1.jpg" alt="Craftsmanship" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
          </motion.div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeUp} className="max-w-md">
              <h2 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-4xl lg:text-5xl mb-8 leading-[1.2]">
                More than an ornament.
              </h2>
              <div className="space-y-6 text-[var(--color-muted)] font-light leading-relaxed">
                <p>
                  We believe that jewellery is the most intimate form of art. It rests against your skin, accompanies you through your days, and eventually becomes a physical vessel for your memories.
                </p>
                <p>
                  At Radhika Jewellery, we don&apos;t just curate pieces; we curate trust. Every piece in our collection is selected with the precise care and attention that your life&apos;s most meaningful moments deserve.
                </p>
              </div>
            </motion.div>
            
            <motion.div {...fadeUp} className="relative">
              <div className="aspect-square relative overflow-hidden bg-[var(--color-surface-alt)] max-w-sm mx-auto">
                <Image src="/images/products/necklace-1.jpg" alt="Timeless design" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE EXPERIENCE */}
      <section className="py-32 px-6 lg:px-10 bg-[var(--color-obsidian)] text-[var(--color-ivory)] text-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-8">
            The Showroom
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl leading-[1.3] mb-10">
            A personal, unhurried experience in the heart of Kurukshetra.
          </h2>
          <p className="text-[var(--color-neutral)] font-light leading-relaxed max-w-xl mx-auto opacity-80 mb-12">
            Located in Sector 7, our showroom is designed to be a sanctuary of elegance. Whether you&apos;re selecting an everyday signature piece or preparing for the most important day of your life, we guide you with patience, expertise, and absolute care.
          </p>
          <Link href="/store" className="inline-block border-b border-[var(--color-champagne)] pb-1 text-xs tracking-[0.15em] uppercase text-[var(--color-champagne)] hover:text-white hover:border-white transition-colors">
            Plan Your Visit
          </Link>
        </motion.div>
      </section>

      {/* 5. COMMITMENT */}
      <section className="py-24 bg-[var(--color-surface-alt)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { title: 'Craftsmanship', desc: 'Every piece is evaluated for its uncompromising quality, detail, and lasting structural integrity.' },
              { title: 'Trust', desc: 'We build enduring relationships. Your confidence is the foundation of our entire legacy.' },
              { title: 'Dedication', desc: 'From the first consultation to lifelong care, our team stands behind every piece you take home.' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 1, delay: i * 0.2 }} className="text-center md:text-left">
                <span className="text-2xl text-[var(--color-champagne)] mb-4 block font-[family-name:var(--font-display)]">0{i+1}.</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-4">{item.title}</h3>
                <p className="text-sm font-light text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
