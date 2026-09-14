'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '@/data/store-info';
import { trackWhatsAppClick } from '@/lib/analytics';

export function WhatsAppFAB() {
  return (
    <motion.a
      href={getWhatsAppUrl('Hello Gupta Jwellery, I would like to enquire about your jewellery collection.')}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick()}
      className="fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-lg hover:bg-[#1ebe57] hover:shadow-xl transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} strokeWidth={1.5} />
      <span className="text-sm font-medium">Chat with Us</span>
    </motion.a>
  );
}
