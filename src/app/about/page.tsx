'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7 },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/products/bangle-1.jpg" alt="About Gupta Jwellery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[var(--color-obsidian)]/50" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[family-name:var(--font-display)] text-[var(--color-ivory)] text-4xl lg:text-6xl"
          >
            More Than Jewellery
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="space-y-6 text-[var(--color-muted)] leading-relaxed text-center">
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium">Our Story</p>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-2xl lg:text-3xl">
              A Name You Can Trust
            </h2>
            <p>
              Jewellery is more than an ornament. It becomes part of celebrations, relationships and 
              memories passed from one generation to the next.
            </p>
            <p>
              At Gupta Jwellery, every piece is selected with the care and attention that such moments 
              deserve. We believe in quality you can trust, designs you&apos;ll treasure, and service 
              that makes you feel valued.
            </p>
            <p>
              Located in the heart of Kurukshetra at Sector 7, our showroom offers a personal, 
              unhurried jewellery experience — whether you&apos;re choosing a gift, exploring everyday 
              pieces, or preparing for the most important day of your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { title: 'Craftsmanship', desc: 'Every piece in our collection is chosen for its quality, detail and lasting beauty.' },
              { title: 'Trust', desc: 'We build relationships, not transactions. Your trust is the foundation of everything we do.' },
              { title: 'Personal Service', desc: 'From everyday choices to bridal consultations, our team is here to guide you with care.' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="text-center">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-obsidian)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[var(--color-surface-alt)] text-center">
        <div className="max-w-lg mx-auto px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-2xl lg:text-3xl">
              Visit Us
            </h2>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              We&apos;d love to welcome you to our Kurukshetra showroom.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/store" className="btn btn-primary">Visit Store</Link>
              <Link href="/appointment" className="btn btn-secondary">Book Appointment</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
