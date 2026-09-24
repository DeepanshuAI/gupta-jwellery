'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle } from 'lucide-react';
import { storeInfo, getWhatsAppUrl, getCallUrl } from '@/data/store-info';
import { trackDirectionsClick, trackWhatsAppClick } from '@/lib/analytics';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function StorePage() {
  return (
    <div className="bg-[var(--color-ivory)] min-h-screen pt-20 lg:pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6"
          >
            Kurukshetra Showroom
          </motion.p>
          <motion.h1 
            {...fadeUp}
            className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-[var(--color-obsidian)] leading-[1.1] mb-8"
          >
            Experience it <span className="italic text-[var(--color-champagne-dark)]">in person.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 shadow-sm overflow-hidden bg-[var(--color-surface)]">
          
          {/* LEFT: Atmospheric Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:h-[700px]"
          >
            <Image 
              src="/images/hero/hero-main.jpg" 
              alt="Radhika Jewellery Showroom" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-none" />
          </motion.div>

          {/* RIGHT: Store Details */}
          <div className="lg:col-span-5 p-12 lg:p-20 flex flex-col justify-center bg-[var(--color-obsidian)] text-[var(--color-ivory)]">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-12"
            >
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-champagne)] mb-3">Location</p>
                <p className="text-lg font-light leading-relaxed max-w-sm">
                  {storeInfo.address.full}
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-champagne)] mb-3">Store Hours</p>
                <p className="text-lg font-light leading-relaxed">
                  Monday – Saturday: {storeInfo.hours.weekdays}<br />
                  Sunday: {storeInfo.hours.sunday}
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-champagne)] mb-3">Contact</p>
                <p className="text-lg font-light leading-relaxed">
                  <a href={getCallUrl()} className="hover:text-[var(--color-champagne-light)] transition-colors">{storeInfo.phone}</a>
                </p>
              </div>

              <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-6">
                <a
                  href={storeInfo.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDirectionsClick()}
                  className="group flex items-center justify-center gap-3 text-xs tracking-[0.1em] uppercase border-b border-[var(--color-champagne)] text-[var(--color-champagne)] pb-2 hover:text-white hover:border-white transition-colors"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick()}
                  className="group flex items-center justify-center gap-3 text-xs tracking-[0.1em] uppercase border-b border-[var(--color-ivory)] pb-2 hover:text-[var(--color-champagne)] hover:border-[var(--color-champagne)] transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section (Optional but requested to be accessible, just less dominant) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <h3 className="text-center font-[family-name:var(--font-display)] text-3xl text-[var(--color-obsidian)] mb-8">Find Us</h3>
          <div className="relative aspect-[21/9] bg-[var(--color-surface-alt)] overflow-hidden">
            <iframe
              src={storeInfo.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Radhika Jewellery Location"
              className="absolute inset-0"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
