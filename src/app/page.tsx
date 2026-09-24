'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { getFeaturedProducts } from '@/data/products';
import { storeInfo, getCallUrl } from '@/data/store-info';
import { useState, useRef } from 'react';

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-100px' },
  transition: { staggerChildren: 0.15 },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
};

// Main Component
export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  return (
    <div className="bg-[var(--color-ivory)] overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Radhika Jewellery"
            fill
            className="object-cover object-center scale-[1.02]"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </motion.div>
        
        <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="font-[family-name:var(--font-display)] text-[var(--color-ivory)] text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.9]">
              RADHIKA
              <span className="block text-4xl md:text-6xl lg:text-7xl mt-3 text-[var(--color-champagne-light)] italic tracking-normal">Jewellery</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 text-[var(--color-neutral)] text-sm md:text-base tracking-[0.2em] uppercase font-light"
          >
            Jewellery that becomes part of your story.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <Link href="/shop" className="group flex items-center justify-center gap-3 text-[var(--color-ivory)] text-sm tracking-[0.1em] uppercase border-b border-[var(--color-ivory)]/30 pb-2 hover:border-[var(--color-ivory)] transition-colors">
              Explore The Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-32 md:py-48 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2 
            {...fadeUp}
            className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl text-[var(--color-obsidian)] leading-[1.1] max-w-4xl mx-auto"
          >
            Some pieces are worn.<br/>
            <span className="text-[var(--color-champagne-dark)] italic">Some become memories.</span>
          </motion.h2>
          <motion.p 
            {...fadeUp} transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-[var(--color-muted)] max-w-xl mx-auto text-lg md:text-xl leading-relaxed font-light"
          >
            Rooted in heritage, designed for the contemporary eye. We create jewellery that doesn&apos;t just adorn, but accompanies you through life&apos;s most meaningful chapters.
          </motion.p>
        </div>
      </section>

      {/* 3. THE CRAFT (Cinematic Storytelling) */}
      <section className="py-24 bg-[var(--color-obsidian)] text-[var(--color-ivory)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
            >
              <Image src="/images/products/necklace-1.jpg" alt="The Craft" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <div className="flex flex-col justify-center max-w-xl lg:pl-10">
              <motion.span {...fadeUp} className="text-[var(--color-champagne)] tracking-[0.2em] text-xs uppercase mb-6 block">The Art of Creation</motion.span>
              <motion.div {...staggerContainer} className="space-y-12">
                {[
                  { title: "Designed", desc: "Every curve and contour is conceptualized with intention, balancing timelessness with modern aesthetics." },
                  { title: "Crafted", desc: "Brought to life by master artisans whose hands hold decades of traditional Indian jewellery-making wisdom." },
                  { title: "Refined", desc: "Meticulously polished and perfected until every gemstone catches the light exactly as envisioned." }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={staggerItem} className="border-l border-[var(--color-charcoal)] pl-8 relative group">
                    <div className="absolute left-0 top-0 w-px h-0 bg-[var(--color-champagne)] transition-all duration-1000 group-hover:h-full" />
                    <h3 className="font-[family-name:var(--font-display)] text-3xl mb-3">{item.title}</h3>
                    <p className="text-[var(--color-neutral)] opacity-80 leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE COLLECTION */}
      <section className="py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <motion.div {...fadeUp} className="lg:col-span-4 pb-12 lg:pb-24">
              <span className="text-[var(--color-champagne-dark)] tracking-[0.15em] text-xs uppercase mb-6 block">The Signature</span>
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-[var(--color-obsidian)] leading-[1.1] mb-6">
                Designed for<br/>moments worth<br/><span className="italic">remembering.</span>
              </h2>
              <Link href="/collections/signature" className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase text-[var(--color-obsidian)] border-b border-[var(--color-obsidian)] pb-2 mt-8">
                Explore Collection
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-8 relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] overflow-hidden bg-[var(--color-surface-alt)]"
            >
              {/* Replace image path if needed, using bridal-hero for now as placeholder for signature */}
              <Image src="/images/editorial/bridal-hero.jpg" alt="Signature Collection" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CURATED PIECES */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div {...fadeUp} className="max-w-xl">
              <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-obsidian)]">Curated Selection</h2>
              <p className="text-[var(--color-muted)] mt-4 font-light">An exceptional edit of our most celebrated designs.</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <Link href="/shop" className="text-xs tracking-[0.1em] uppercase text-[var(--color-obsidian)] border-b border-transparent hover:border-[var(--color-obsidian)] transition-colors pb-1">
                View All Jewellery
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-12">
            {featuredProducts.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group"
              >
                <Link href={`/shop/${product.slug}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface-alt)] mb-6">
                    <Image 
                      src={product.images[0]} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {product.images[1] && (
                      <Image 
                        src={product.images[1]} 
                        alt={`${product.name} alternate view`} 
                        fill 
                        className="object-cover absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-muted)] mb-2">{product.category}</p>
                      <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-obsidian)] group-hover:text-[var(--color-champagne-dark)] transition-colors line-clamp-1">{product.name}</h3>
                    </div>
                    <p className="text-sm text-[var(--color-obsidian)] font-light mt-6">
                      {product.price > 0 ? `₹${product.price.toLocaleString('en-IN')}` : 'Enquire'}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. JEWELLERY AS ART */}
      <section className="relative h-[80svh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-surface-alt)]">
          <Image src="/images/products/bangle-1.jpg" alt="Jewellery as Art" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-white italic tracking-tight drop-shadow-lg">
            Made to be remembered.
          </h2>
        </motion.div>
      </section>

      {/* 7. COLLECTION WORLDS (Interactive Hover) */}
      <CollectionWorlds />

      {/* 8. BRIDAL EXPERIENCE */}
      <section className="py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-[var(--color-obsidian)] text-[var(--color-ivory)] overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-[var(--color-ivory)] leading-[1.1] mb-8">
                For the<br/><span className="text-[var(--color-champagne)] italic">beginning</span><br/>of forever.
              </h2>
              <p className="text-[var(--color-neutral)] text-lg max-w-md font-light leading-relaxed opacity-80 mb-12">
                Enter a world of bridal elegance. From intricate polki sets to contemporary diamond statements, our bridal curation is designed to make you radiant on your most important day.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/bridal" className="btn btn-champagne !text-[var(--color-obsidian)]">
                  Explore Bridal
                </Link>
                <Link href="/appointment" className="group flex items-center justify-center gap-3 text-[var(--color-ivory)] text-xs tracking-[0.15em] uppercase border-b border-[var(--color-ivory)]/30 pb-2 hover:border-[var(--color-ivory)] transition-colors">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="order-1 lg:order-2 relative aspect-[3/4] overflow-hidden bg-[var(--color-charcoal)]"
            >
              <Image src="/images/editorial/bridal-hero.jpg" alt="Bridal Experience" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. HERITAGE / STORY */}
      <section className="py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.p {...fadeUp} className="text-xs tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-8">The Heritage</motion.p>
          <motion.h2 
            {...fadeUp} transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-[var(--color-obsidian)] leading-[1.2] mb-12"
          >
            A name passed from one generation to another.
          </motion.h2>
          <motion.p 
            {...fadeUp} transition={{ delay: 0.2 }}
            className="text-[var(--color-muted)] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            At Radhika Jewellery, we understand that we don&apos;t just sell gold and diamonds. We provide the physical markers of your family&apos;s history. Decades of trust, uncompromising quality, and an unwavering commitment to craftsmanship define everything we do.
          </motion.p>
        </div>
      </section>

      {/* 10 & 11. SHOWROOM & APPOINTMENT (Split Screen) */}
      <section className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="grid lg:grid-cols-2">
          {/* Showroom Left */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[900px] overflow-hidden bg-[var(--color-surface-alt)]">
            <Image src="/images/hero/hero-main.jpg" alt="Radhika Jewellery Showroom" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 p-10 lg:p-20 flex flex-col justify-end text-white">
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl mb-8">Visit The<br/>Showroom</h2>
              <div className="space-y-6 text-white/80 font-light">
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Address</p>
                  <p className="text-lg">{storeInfo.address.full}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Hours</p>
                  <p className="text-lg">Mon – Sat: {storeInfo.hours.weekdays}<br/>Sunday: {storeInfo.hours.sunday}</p>
                </div>
                <div className="flex flex-wrap gap-6 pt-6">
                  <a href={storeInfo.maps.directionsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                    Get Directions
                  </a>
                  <a href={getCallUrl()} className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Appointment Right */}
          <div className="p-10 lg:p-20 flex items-center justify-center bg-[var(--color-surface-alt)]">
            <div className="w-full max-w-md">
              <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-obsidian)] mb-4">Request Consultation</h2>
              <p className="text-[var(--color-muted)] font-light mb-12">Reserve time with our specialists for a private viewing or custom design session.</p>
              
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-32 px-6 md:px-10 lg:px-16 text-center bg-[var(--color-ivory)]">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-[var(--color-obsidian)] leading-[1.1] mb-12">
            Some moments pass.<br/><span className="italic text-[var(--color-champagne-dark)]">The right jewellery remains.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/shop" className="btn btn-primary">
              Explore The Collection
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Subcomponents

function CollectionWorlds() {
  const collections = [
    { name: "Rings", image: "/images/products/ring-1.jpg", href: "/shop" },
    { name: "Earrings", image: "/images/products/earring-1.jpg", href: "/shop" },
    { name: "Necklaces", image: "/images/products/necklace-1.jpg", href: "/shop" },
    { name: "Bridal", image: "/images/editorial/bridal-hero.jpg", href: "/bridal" },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 lg:py-40 bg-[var(--color-surface)] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col space-y-10">
            {collections.map((item, idx) => (
              <div 
                key={item.name} 
                onMouseEnter={() => setActiveIndex(idx)}
                className={`transition-all duration-500 cursor-pointer ${activeIndex === idx ? 'opacity-100 translate-x-4' : 'opacity-40 hover:opacity-70'}`}
              >
                <Link href={item.href} className="block">
                  <h3 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-obsidian)]">
                    {item.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-surface-alt)]">
              {collections.map((item, idx) => (
                <div 
                  key={item.name}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Full-Width Cards */}
        <div className="flex flex-col gap-16 lg:hidden">
          <div className="mb-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne-dark)] mb-4">Discover</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-obsidian)]">Our Worlds</h2>
          </div>
          {collections.map((item) => (
            <Link key={item.name} href={item.href} className="block group">
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 bg-[var(--color-surface-alt)]">
                <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="100vw" />
              </div>
              <div className="flex justify-between items-center border-b border-[var(--color-obsidian)] pb-4">
                <h3 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-obsidian)]">
                  {item.name}
                </h3>
                <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-champagne-dark)]">Explore</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-2">Thank You</h3>
        <p className="text-[var(--color-muted)] font-light">Our concierge will contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <input type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors placeholder:text-[var(--color-muted)] font-light" />
        </div>
        <div>
          <input type="tel" required placeholder="Phone Number" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors placeholder:text-[var(--color-muted)] font-light" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="date" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors font-light appearance-none" />
          <input type="time" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors font-light appearance-none" />
        </div>
      </div>
      <button type="submit" className="w-full btn btn-primary text-xs tracking-[0.1em]">
        Submit Request
      </button>
    </form>
  );
}
