'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { storeInfo, getWhatsAppUrl, getCallUrl } from '@/data/store-info';
import { trackDirectionsClick, trackCallClick, trackWhatsAppClick } from '@/lib/analytics';

export default function StorePage() {
  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Visit Gupta Jwellery"
          subtitle="Discover it online. Experience it in person."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-[var(--color-surface-alt)] overflow-hidden"
          >
            <iframe
              src={storeInfo.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gupta Jwellery Location"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-champagne)]/10">
                  <MapPin size={20} className="text-[var(--color-champagne)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-obsidian)] mb-1">Address</p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{storeInfo.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-champagne)]/10">
                  <Phone size={20} className="text-[var(--color-champagne)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-obsidian)] mb-1">Phone</p>
                  <a href={getCallUrl()} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-champagne)] transition-colors">
                    {storeInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-champagne)]/10">
                  <Clock size={20} className="text-[var(--color-champagne)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-obsidian)] mb-1">Store Hours</p>
                  <p className="text-sm text-[var(--color-muted)]">
                    Monday – Saturday: {storeInfo.hours.weekdays}<br />
                    Sunday: {storeInfo.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href={storeInfo.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick()}
                className="btn btn-primary"
              >
                <MapPin size={16} /> Get Directions
              </a>
              <a href={getCallUrl()} onClick={() => trackCallClick()} className="btn btn-secondary">
                <Phone size={16} /> Call Store
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick()}
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
