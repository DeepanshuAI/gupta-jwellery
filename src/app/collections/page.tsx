'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { collections } from '@/data/collections';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function CollectionsPage() {
  return (
    <div className="bg-[var(--color-ivory)] min-h-screen pt-20 lg:pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6"
          >
            The Worlds
          </motion.p>
          <motion.h1 
            {...fadeUp}
            className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-[var(--color-obsidian)] leading-[1.1]"
          >
            Curated edits for<br/>every <span className="italic text-[var(--color-champagne-dark)]">occasion.</span>
          </motion.h1>
        </div>

        {/* Collections List */}
        <div className="space-y-16 lg:space-y-32">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group"
            >
              <Link href={`/collections/${col.slug}`} className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
                
                {/* Image Side */}
                <div className={`relative overflow-hidden bg-[var(--color-surface-alt)] ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} aspect-[4/3] lg:aspect-[16/10]`}>
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                </div>
                
                {/* Text Side */}
                <div className={`flex flex-col justify-center ${i % 2 === 0 ? 'lg:order-2 lg:pl-16 xl:pl-24' : 'lg:order-1 lg:pr-16 xl:pr-24'}`}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-4">{col.tagline}</p>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl text-[var(--color-obsidian)] mb-6 group-hover:text-[var(--color-champagne-dark)] transition-colors duration-500">{col.name}</h2>
                  <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-md mb-8">{col.description}</p>
                  
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[var(--color-obsidian)] border-b border-[var(--color-obsidian)] pb-1 w-max group-hover:border-[var(--color-champagne)] group-hover:text-[var(--color-champagne)] transition-colors">
                    Explore Collection
                  </span>
                </div>
                
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
