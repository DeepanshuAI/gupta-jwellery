'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { trackAppointmentSubmit } from '@/lib/analytics';

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
    <div className="py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Book an Appointment"
          subtitle="Let our team help you find something made for your occasion, style and story."
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-5 bg-[var(--color-champagne)]/10 flex items-center justify-center">
              <Send size={24} className="text-[var(--color-champagne)]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-obsidian)] mb-3">
              Thank You
            </h2>
            <p className="text-[var(--color-muted)]">
              Our team will contact you shortly to confirm your appointment.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white p-6 lg:p-10 space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Phone *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Preferred Date</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Preferred Time</label>
                <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-[0.06em] uppercase text-[var(--color-muted)] font-medium block mb-1.5">Looking For</label>
              <select value={formData.jewelleryType} onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors appearance-none">
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
              <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you're looking for..."
                className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-sm focus:border-[var(--color-champagne)] focus:outline-none transition-colors resize-none" />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Request Appointment
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
