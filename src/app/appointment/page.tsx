'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { trackAppointmentSubmit } from '@/lib/analytics';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: '', jewelleryType: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackAppointmentSubmit(formData.jewelleryType);
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen pt-20 lg:pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-0 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 lg:min-h-[80vh] items-stretch bg-[var(--color-surface)] shadow-sm">
          
          {/* LEFT: Brand Message & Image */}
          <div className="relative p-12 lg:p-24 flex flex-col justify-center overflow-hidden bg-[var(--color-charcoal)]">
            <div className="absolute inset-0">
              <Image 
                src="/images/hero/hero-main.jpg" 
                alt="Radhika Jewellery Consultation" 
                fill 
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-obsidian)]/90 to-[var(--color-obsidian)]/40" />
            </div>
            
            <div className="relative z-10 text-white">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-8"
              >
                Private Consultation
              </motion.p>
              <motion.h1 
                {...fadeUp}
                className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8"
              >
                Your Jewellery.<br/>
                <span className="italic text-[var(--color-champagne-light)]">Your Moment.</span>
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6 text-white/80 font-light leading-relaxed max-w-md"
              >
                <p>
                  Some pieces require time, conversation, and an expert eye. Reserve a dedicated session with our specialists to explore our collections or design something entirely bespoke.
                </p>
                <p>
                  Experience the exceptional in our unhurried, private viewing spaces at our Kurukshetra showroom.
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="p-10 lg:p-20 flex items-center justify-center bg-[var(--color-surface)]">
            <div className="w-full max-w-md">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center py-12"
                >
                  <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-obsidian)] mb-4">
                    Thank You
                  </h2>
                  <p className="text-[var(--color-muted)] font-light leading-relaxed">
                    Your request has been received. Our concierge will contact you shortly to confirm your appointment details.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <div>
                      <input 
                        type="text" 
                        required 
                        placeholder="Full Name" 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors placeholder:text-[var(--color-muted)] font-light" 
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors placeholder:text-[var(--color-muted)] font-light" 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address (Optional)" 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors placeholder:text-[var(--color-muted)] font-light" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="relative">
                        <label className="absolute -top-3 left-0 text-[10px] tracking-widest uppercase text-[var(--color-muted)]">Date</label>
                        <input 
                          type="date" 
                          value={formData.date} 
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors font-light appearance-none" 
                        />
                      </div>
                      <div className="relative">
                        <label className="absolute -top-3 left-0 text-[10px] tracking-widest uppercase text-[var(--color-muted)]">Time</label>
                        <input 
                          type="time" 
                          value={formData.time} 
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors font-light appearance-none" 
                        />
                      </div>
                    </div>
                    
                    <div className="relative pt-4">
                      <select 
                        value={formData.jewelleryType} 
                        onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })}
                        className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors appearance-none font-light"
                      >
                        <option value="" disabled>Subject of Consultation</option>
                        <option value="bridal">Bridal Trousseau</option>
                        <option value="gold">Signature Gold Collection</option>
                        <option value="diamond">Diamond Jewellery</option>
                        <option value="bespoke">Bespoke Design</option>
                        <option value="gift">Gifting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <textarea 
                        rows={3} 
                        placeholder="Please share any specific details or pieces you are interested in..." 
                        value={formData.message} 
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-base md:text-sm text-[var(--color-obsidian)] focus:border-[var(--color-obsidian)] outline-none transition-colors resize-none placeholder:text-[var(--color-muted)] font-light" 
                      />
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-[var(--color-obsidian)] text-white py-4 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-champagne-dark)] transition-colors duration-500">
                    Request Appointment
                  </button>
                </motion.form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
