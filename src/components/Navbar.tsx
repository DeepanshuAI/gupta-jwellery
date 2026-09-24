'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const pathname = usePathname();

  // Determine if we should start transparent based on the page
  const hasDarkHero = pathname === '/' || pathname === '/bridal';
  
  const isTransparent = hasDarkHero && !isScrolled && !mobileOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    // Initialize state
    handleScroll();
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

  const textColorClass = isTransparent ? 'text-white' : 'text-[var(--color-obsidian)]';
  const logoColorClass = isTransparent ? 'text-white' : 'text-[var(--color-obsidian)]';
  const hoverColorClass = isTransparent ? 'hover:text-white/70' : 'hover:text-[var(--color-champagne-dark)]';
  
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled || mobileOpen
            ? 'bg-[var(--color-ivory)]/95 backdrop-blur-md shadow-[0_1px_0_var(--color-border)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Desktop Nav - Left */}
            <div className="hidden lg:flex items-center gap-10 flex-1">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.15em] uppercase ${textColorClass} ${hoverColorClass} transition-colors duration-300 font-medium`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo - Center */}
            <Link
              href="/"
              className={`font-[family-name:var(--font-display)] text-2xl lg:text-3xl tracking-widest ${logoColorClass} transition-colors duration-500`}
            >
              RADHIKA
            </Link>

            {/* Desktop Nav - Right */}
            <div className="hidden lg:flex items-center justify-end gap-10 flex-1">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.15em] uppercase ${textColorClass} ${hoverColorClass} transition-colors duration-300 font-medium`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex items-center gap-5 ml-4 border-l border-current pl-8 opacity-70">
                <Link
                  href="/search"
                  className={`${textColorClass} ${hoverColorClass} transition-colors`}
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={1.2} />
                </Link>
                <Link
                  href="/wishlist"
                  className={`${textColorClass} ${hoverColorClass} transition-colors`}
                  aria-label="Wishlist"
                >
                  <Heart size={18} strokeWidth={1.2} />
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 lg:hidden">
              <Link
                href="/wishlist"
                className={`p-2 ${textColorClass} transition-colors`}
                aria-label="Wishlist"
              >
                <Heart size={20} strokeWidth={1.2} />
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className={`p-2 ${textColorClass}`}
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.2} />
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[var(--color-ivory)] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-display)] text-2xl tracking-widest text-[var(--color-obsidian)]"
              >
                RADHIKA
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[var(--color-obsidian)]"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.2} />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center px-10 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-obsidian)] hover:text-[var(--color-champagne)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                className="pt-8 border-t border-[var(--color-border)] mt-4 flex flex-col gap-6"
              >
                <Link
                  href="/appointment"
                  onClick={() => setMobileOpen(false)}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-obsidian)] border-b border-[var(--color-obsidian)] self-start pb-1"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/search"
                  onClick={() => setMobileOpen(false)}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-muted)] flex items-center gap-2"
                >
                  <Search size={14} /> Search Collection
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
