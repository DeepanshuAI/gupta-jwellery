'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, HeartHandshake, MapPin, MessageCircle, Phone, Clock, Send } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedCategories } from '@/data/categories';
import { storeInfo, getWhatsAppUrl, getCallUrl } from '@/data/store-info';
import { trackWhatsAppClick, trackCallClick, trackDirectionsClick } from '@/lib/analytics';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 },
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const categories = getFeaturedCategories();

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — Hero
      ═══════════════════════════════════════════ */}
      <section className="relative h-[100vh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Gupta Jwellery — Timeless Jewellery"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-obsidian)]/70 via-[var(--color-obsidian)]/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-[family-name:var(--font-display)] text-[var(--color-ivory)] leading-[1.05]"
            >
              Timeless Jewellery.
              <br />
              <span className="text-[var(--color-champagne)]">Modern Elegance.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-[var(--color-neutral)] text-base lg:text-lg max-w-md leading-relaxed"
            >
              Discover jewellery crafted for celebrations, milestones and everyday moments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/shop" className="btn btn-champagne">
                Explore Collection
              </Link>
              <Link href="/store" className="btn btn-secondary !border-[var(--color-ivory)]/40 !text-[var(--color-ivory)] hover:!bg-[var(--color-ivory)] hover:!text-[var(--color-obsidian)]">
                Visit Showroom
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — Trust Strip
      ═══════════════════════════════════════════ */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Shield, title: 'Trusted Jewellery', desc: 'Quality & craftsmanship' },
              { icon: HeartHandshake, title: 'Personal Assistance', desc: 'Expert guidance' },
              { icon: MapPin, title: 'Visit Our Store', desc: 'Kurukshetra showroom' },
              { icon: MessageCircle, title: 'Easy Enquiry', desc: 'WhatsApp & phone support' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 lg:gap-4"
              >
                <div className="p-2.5 bg-[var(--color-ivory)]">
                  <item.icon size={20} strokeWidth={1.5} className="text-[var(--color-champagne)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-obsidian)]">{item.title}</p>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — Shop By Category
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            title="Explore the Collection"
            subtitle="Discover pieces designed for everyday elegance, celebration and everything in between."
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link href={`/shop/${cat.slug}`} className="group relative block overflow-hidden aspect-[3/4]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 flex items-end justify-between">
                    <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl text-white">
                      {cat.name}
                    </h3>
                    <ArrowRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — Featured Collection (Editorial)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium mb-4">
                Featured Collection
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)]">
                Made for the Moment
              </h2>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed max-w-md">
                Pieces designed to become part of your most unforgettable occasions. 
                From intimate celebrations to grand milestones, find jewellery that speaks to the moment.
              </p>
              <Link href="/collections" className="btn btn-ghost mt-8">
                Explore Collection
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/products/necklace-1.jpg"
                alt="Featured Collection — Made for the Moment"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — Bridal
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/editorial/bridal-hero.jpg"
            alt="Bridal Jewellery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-obsidian)]/50" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-20">
          <div className="max-w-xl">
            <motion.p
              {...fadeUp}
              className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium mb-4"
            >
              Bridal Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[family-name:var(--font-display)] text-[var(--color-ivory)] text-4xl lg:text-5xl"
            >
              For the Beginning of Forever
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-[var(--color-neutral)] leading-relaxed"
            >
              Discover bridal jewellery designed to make every celebration unforgettable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/bridal" className="btn btn-champagne">
                Explore Bridal Jewellery
              </Link>
              <Link href="/appointment" className="btn btn-secondary !border-[var(--color-ivory)]/40 !text-[var(--color-ivory)] hover:!bg-[var(--color-ivory)] hover:!text-[var(--color-obsidian)]">
                Book Bridal Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — Signature Pieces (Featured Products)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            title="Signature Pieces"
            subtitle="Pieces worth remembering. Discover designs created to become part of your story."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className="btn btn-secondary">
              View All Jewellery
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — Brand Story
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/images/products/bangle-1.jpg"
                alt="Gupta Jwellery Craftsmanship"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium mb-4">
                Our Story
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)]">
                A Name You Can Trust
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Jewellery is more than an ornament. It becomes part of celebrations, relationships 
                  and memories passed from one generation to the next.
                </p>
                <p>
                  At Gupta Jwellery, every piece is selected and crafted with the care and attention 
                  that such moments deserve. We believe in quality you can trust, designs you&apos;ll 
                  treasure, and service that makes you feel valued.
                </p>
              </div>
              <Link href="/about" className="btn btn-ghost mt-8">
                Discover Gupta Jwellery
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — Campaign / Editorial
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'The Celebration Edit',
                desc: 'Jewellery for life\'s most memorable occasions.',
                image: '/images/products/earring-1.jpg',
                href: '/collections/festive',
              },
              {
                title: 'Everyday Gold',
                desc: 'Lightweight pieces for quiet, daily elegance.',
                image: '/images/products/bracelet-1.jpg',
                href: '/collections/everyday',
              },
              {
                title: 'The Gift Edit',
                desc: 'Find something they\'ll treasure forever.',
                image: '/images/products/ring-1.jpg',
                href: '/shop',
              },
            ].map((campaign, i) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={campaign.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl text-white mb-1">
                        {campaign.title}
                      </h3>
                      <p className="text-sm text-[var(--color-neutral)]">{campaign.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — Visit Us / Store
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            title="Visit Gupta Jwellery"
            subtitle="Discover it online. Experience it in person."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Map */}
            <motion.div {...fadeUp} className="relative aspect-[4/3] bg-[var(--color-surface-alt)] overflow-hidden">
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
            <motion.div {...fadeUp} className="flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[var(--color-champagne)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-obsidian)]">Address</p>
                    <p className="text-sm text-[var(--color-muted)] mt-1">{storeInfo.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[var(--color-champagne)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-obsidian)]">Phone</p>
                    <a href={getCallUrl()} className="text-sm text-[var(--color-muted)] mt-1 hover:text-[var(--color-champagne)] transition-colors">
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-[var(--color-champagne)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-obsidian)]">Store Hours</p>
                    <p className="text-sm text-[var(--color-muted)] mt-1">
                      Mon – Sat: {storeInfo.hours.weekdays}<br />
                      Sunday: {storeInfo.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
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
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10 — Appointment Form
      ═══════════════════════════════════════════ */}
      <AppointmentSection />

      {/* ═══════════════════════════════════════════
          SECTION 11 — Final CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-main.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-obsidian)]/65" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <motion.h2
            {...fadeUp}
            className="font-[family-name:var(--font-display)] text-[var(--color-ivory)] text-3xl lg:text-5xl"
          >
            Find Something Worth Remembering.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-[var(--color-neutral)] max-w-lg mx-auto"
          >
            Explore the collection or visit our Kurukshetra showroom for a personal jewellery experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link href="/shop" className="btn btn-champagne">
              Explore Collection
            </Link>
            <Link href="/store" className="btn btn-secondary !border-[var(--color-ivory)]/40 !text-[var(--color-ivory)] hover:!bg-[var(--color-ivory)] hover:!text-[var(--color-obsidian)]">
              Visit Gupta Jwellery
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ── Appointment Section (inline client component) ── */
function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: '',
    jewelleryType: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-champagne)] font-medium mb-4">
              Book an Appointment
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--color-obsidian)]">
              Your Jewellery. Your Moment.
            </h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed max-w-md">
              Let our team help you find something made for your occasion, style and story. 
              Book a personal consultation at our Kurukshetra showroom.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            {submitted ? (
              <div className="bg-white p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[var(--color-champagne)]/10 flex items-center justify-center">
                  <Send size={20} className="text-[var(--color-champagne)]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-obsidian)] mb-2">
                  Thank You
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Our team will contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 lg:p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Preferred Time</label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Looking For</label>
                  <select
                    value={formData.jewelleryType}
                    onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="bridal">Bridal Jewellery</option>
                    <option value="gold">Gold Jewellery</option>
                    <option value="diamond">Diamond Jewellery</option>
                    <option value="gift">Gift</option>
                    <option value="mens">Men&apos;s Jewellery</option>
                    <option value="couple">Couple Jewellery</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you're looking for..."
                    className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Request Appointment
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
