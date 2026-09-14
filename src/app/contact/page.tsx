'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { storeInfo, getWhatsAppUrl, getCallUrl } from '@/data/store-info';
import { trackDirectionsClick, trackCallClick, trackWhatsAppClick } from '@/lib/analytics';

export default function ContactPage() {
  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Get in Touch"
          subtitle="We'd love to hear from you. Reach out via WhatsApp, phone, or visit our showroom."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              desc: 'Chat with our team',
              action: 'Send Message',
              href: getWhatsAppUrl(),
              onClick: () => trackWhatsAppClick(),
              external: true,
            },
            {
              icon: Phone,
              title: 'Phone',
              desc: storeInfo.phone,
              action: 'Call Now',
              href: getCallUrl(),
              onClick: () => trackCallClick(),
              external: false,
            },
            {
              icon: MapPin,
              title: 'Visit Store',
              desc: 'Sector 7, Kurukshetra',
              action: 'Get Directions',
              href: storeInfo.maps.directionsUrl,
              onClick: () => trackDirectionsClick(),
              external: true,
            },
            {
              icon: Mail,
              title: 'Appointment',
              desc: 'Book a consultation',
              action: 'Book Now',
              href: '/appointment',
              onClick: () => {},
              external: false,
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={item.onClick}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="block p-6 bg-white hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-[var(--color-champagne)]/10 flex items-center justify-center group-hover:bg-[var(--color-champagne)]/20 transition-colors">
                <item.icon size={22} className="text-[var(--color-champagne)]" />
              </div>
              <h3 className="font-medium text-[var(--color-obsidian)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)] mb-3">{item.desc}</p>
              <span className="text-xs tracking-[0.06em] uppercase text-[var(--color-champagne)] font-medium">
                {item.action}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
