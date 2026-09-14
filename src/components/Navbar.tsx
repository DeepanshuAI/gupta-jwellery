'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '@/data/store-info';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'Bridal', href: '/bridal' },
  { label: 'About', href: '/about' },
  { label: 'Visit Us', href: '/store' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[var(--color-obsidian)] text-[var(--color-ivory)] text-center py-2 px-4 text-xs tracking-[0.12em] uppercase font-[family-name:var(--font-body)]">
        Complimentary Jewellery Consultation · Visit Our Kurukshetra Showroom
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--color-ivory)]/95 backdrop-blur-md shadow-[0_1px_0_var(--color-border)]'
            : 'bg-[var(--color-ivory)]'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-xl lg:text-2xl tracking-wide text-[var(--color-obsidian)] hover:text-[var(--color-champagne)] transition-colors duration-300"
            >
              GUPTA JWELLERY
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.8125rem] tracking-[0.08em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/search"
                className="p-2 text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors"
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href="/wishlist"
                className="hidden sm:block p-2 text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={20} strokeWidth={1.5} />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs tracking-[0.06em] uppercase font-medium rounded-none hover:bg-[#1ebe57] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                WhatsApp
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-[var(--color-charcoal)]"
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[var(--color-ivory)] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[var(--color-obsidian)]"
              >
                GUPTA JWELLERY
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[var(--color-charcoal)]"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-10 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-obsidian)] hover:text-[var(--color-champagne)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="pt-6 border-t border-[var(--color-border)]"
              >
                <Link
                  href="/appointment"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.06em] uppercase text-[var(--color-champagne)] font-medium"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
