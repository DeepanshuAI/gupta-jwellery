'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '@/data/store-info';
import { trackWhatsAppClick } from '@/lib/analytics';

export function WhatsAppFAB() {
  return (
    <motion.a
      href={getWhatsAppUrl('Hello Radhika Jewellery, I would like to enquire about your jewellery collection.')}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick()}
      className="fixed bottom-8 right-8 z-50 hidden lg:flex items-center gap-3 bg-[var(--color-obsidian)] text-[var(--color-ivory)] pl-5 pr-6 py-4 shadow-xl hover:bg-[var(--color-champagne-dark)] hover:shadow-2xl transition-all duration-500"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} strokeWidth={1.5} />
      <span className="text-[10px] tracking-[0.2em] uppercase">Concierge</span>
    </motion.a>
  );
}
