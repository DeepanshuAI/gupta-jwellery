import Link from 'next/link';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { storeInfo, getWhatsAppUrl, getCallUrl } from '@/data/store-info';

export function Footer() {
  return (
    <footer className="bg-[var(--color-obsidian)] text-[var(--color-ivory)] pb-24 lg:pb-0">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl tracking-wide block mb-4"
            >
              GUPTA JWELLERY
            </Link>
            <p className="text-sm text-[var(--color-neutral)] leading-relaxed max-w-[280px]">
              Jewellery for moments worth remembering.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--color-neutral)]/30 hover:border-[var(--color-champagne)] hover:text-[var(--color-champagne)] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
              <a
                href={getCallUrl()}
                className="p-2 border border-[var(--color-neutral)]/30 hover:border-[var(--color-champagne)] hover:text-[var(--color-champagne)] transition-colors"
                aria-label="Call"
              >
                <Phone size={18} strokeWidth={1.5} />
              </a>
              <a
                href={storeInfo.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--color-neutral)]/30 hover:border-[var(--color-champagne)] hover:text-[var(--color-champagne)] transition-colors"
                aria-label="Directions"
              >
                <MapPin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6 text-[var(--color-champagne)]">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Rings', 'Earrings', 'Necklaces', 'Chains', 'Bangles', 'Bracelets', 'Bridal'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/shop/${item.toLowerCase()}`}
                      className="text-sm text-[var(--color-neutral)] hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6 text-[var(--color-champagne)]">
              Experience
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Book Appointment', href: '/appointment' },
                { label: 'Visit Store', href: '/store' },
                { label: 'Contact', href: '/contact' },
                { label: 'Collections', href: '/collections' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-neutral)] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6 text-[var(--color-champagne)]">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-neutral)] hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={getCallUrl()}
                  className="text-sm text-[var(--color-neutral)] hover:text-white transition-colors"
                >
                  Call {storeInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={storeInfo.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-neutral)] hover:text-white transition-colors"
                >
                  Get Directions
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-[var(--color-neutral)]/60 leading-relaxed">
                {storeInfo.address.full}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-neutral)]/50">
            © {new Date().getFullYear()} Gupta Jwellery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[var(--color-neutral)]/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--color-neutral)]/50 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
