import Link from 'next/link';
import { storeInfo, getWhatsAppUrl, getCallUrl } from '@/data/store-info';

export function Footer() {
  return (
    <footer className="bg-[var(--color-obsidian)] text-[var(--color-ivory)] pt-24 lg:pt-32 pb-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Top Section - Large Branding */}
        <div className="flex flex-col items-center text-center mb-24">
          <Link href="/" className="inline-block">
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-9xl tracking-widest text-[var(--color-ivory)] hover:text-[var(--color-champagne)] transition-colors duration-500">
              RADHIKA
            </h2>
            <p className="text-[var(--color-champagne-light)] text-lg md:text-2xl mt-4 font-[family-name:var(--font-display)] italic tracking-normal">
              Jewellery
            </p>
          </Link>
        </div>

        {/* Middle Section - Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-[var(--color-ivory)]/10 pt-16">
          
          {/* Shop */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-champagne)]">
              Shop
            </h4>
            <ul className="space-y-4">
              {['Rings', 'Earrings', 'Necklaces', 'Chains', 'Bangles', 'Bracelets'].map((item) => (
                <li key={item}>
                  <Link href={`/shop/${item.toLowerCase()}`} className="text-sm font-light tracking-[0.05em] text-[var(--color-neutral)] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-champagne)]">
              Experience
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Bridal Collection', href: '/bridal' },
                { label: 'Signature Collections', href: '/collections' },
                { label: 'Our Heritage', href: '/about' },
                { label: 'Book Consultation', href: '/appointment' },
                { label: 'Visit Showroom', href: '/store' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-light tracking-[0.05em] text-[var(--color-neutral)] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-champagne)]">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-sm font-light tracking-[0.05em] text-[var(--color-neutral)] hover:text-white transition-colors">
                  WhatsApp Concierge
                </a>
              </li>
              <li>
                <a href={getCallUrl()} className="text-sm font-light tracking-[0.05em] text-[var(--color-neutral)] hover:text-white transition-colors">
                  Call {storeInfo.phone}
                </a>
              </li>
              <li>
                <a href="mailto:info@radhikajewellery.com" className="text-sm font-light tracking-[0.05em] text-[var(--color-neutral)] hover:text-white transition-colors">
                  info@radhikajewellery.com
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-champagne)]">
              Kurukshetra Showroom
            </h4>
            <p className="text-sm font-light tracking-[0.05em] text-[var(--color-neutral)] leading-relaxed mb-6">
              {storeInfo.address.full}
            </p>
            <p className="text-sm font-light tracking-[0.05em] text-[var(--color-neutral)] leading-relaxed mb-8">
              Mon – Sat: {storeInfo.hours.weekdays}<br/>
              Sunday: {storeInfo.hours.sunday}
            </p>
            <a href={storeInfo.maps.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-block border-b border-[var(--color-champagne)] pb-1 text-xs tracking-[0.15em] uppercase text-[var(--color-ivory)] hover:text-[var(--color-champagne)] transition-colors">
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-[var(--color-ivory)]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-neutral)]/50">
            © {new Date().getFullYear()} Radhika Jewellery. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-neutral)]/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-neutral)]/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
