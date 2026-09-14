'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { collections } from '@/data/collections';

export default function CollectionsPage() {
  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Our Collections"
          subtitle="Curated edits for every occasion, mood and milestone."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/collections/${col.slug}`} className="group block relative overflow-hidden aspect-[16/10]">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/70 via-[var(--color-obsidian)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-xs tracking-[0.12em] uppercase text-[var(--color-champagne)] font-medium mb-1">{col.tagline}</p>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl text-white">{col.name}</h2>
                  <p className="text-sm text-[var(--color-neutral)] mt-2 max-w-md">{col.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
