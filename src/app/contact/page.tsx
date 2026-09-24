'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Calendar } from 'lucide-react';
import { storeInfo, getWhatsAppUrl, getCallUrl } from '@/data/store-info';
import { trackDirectionsClick, trackCallClick, trackWhatsAppClick } from '@/lib/analytics';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-24 lg:pt-32 pb-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-16 lg:mb-24">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-6"
          >
            Connect With Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)] text-4xl lg:text-5xl"
          >
            At Your Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-[var(--color-muted)] font-light mt-6 max-w-lg mx-auto"
          >
            Whether you wish to enquire about a specific piece or arrange a private viewing, our concierge is here to assist you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: MessageCircle,
              title: 'Concierge',
              desc: 'Personalised assistance via WhatsApp',
              action: 'Send Message',
              href: getWhatsAppUrl(),
              onClick: () => trackWhatsAppClick(),
              external: true,
              Component: 'a' as const
            },
            {
              icon: Phone,
              title: 'Direct Line',
              desc: storeInfo.phone,
              action: 'Call Boutique',
              href: getCallUrl(),
              onClick: () => trackCallClick(),
              external: false,
              Component: 'a' as const
            },
            {
              icon: MapPin,
              title: 'Boutique',
              desc: 'Sector 7, Kurukshetra',
              action: 'Get Directions',
              href: storeInfo.maps.directionsUrl,
              onClick: () => trackDirectionsClick(),
              external: true,
              Component: 'a' as const
            },
            {
              icon: Calendar,
              title: 'Private Viewing',
              desc: 'Book a consultation in our showroom',
              action: 'Reserve Time',
              href: '/appointment',
              onClick: () => {},
              external: false,
              Component: Link
            },
          ].map((item, i) => {
            const Comp = item.Component;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {/* @ts-expect-error Component types can vary */}
                <Comp
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={item.onClick}
                  className="block p-10 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-obsidian)] transition-colors group h-full text-center"
                >
                  <div className="mx-auto mb-8 flex justify-center">
                    <item.icon size={28} strokeWidth={1} className="text-[var(--color-obsidian)] group-hover:text-[var(--color-champagne-dark)] transition-colors" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-[var(--color-muted)] mb-8">{item.desc}</p>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-obsidian)] border-b border-[var(--color-obsidian)] pb-1 group-hover:text-[var(--color-champagne-dark)] group-hover:border-[var(--color-champagne-dark)] transition-colors">
                    {item.action}
                  </span>
                </Comp>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
