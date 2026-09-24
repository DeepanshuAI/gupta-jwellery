export const storeInfo = {
  name: 'Radhika Jewellery',
  tagline: 'Timeless Jewellery. Modern Elegance.',
  description: 'Discover jewellery crafted for celebrations, milestones and everyday moments.',
  address: {
    line1: 'Shop No. 21–22, Market Rd',
    line2: 'Urban Estate, Sector 7',
    city: 'Kurukshetra',
    state: 'Haryana',
    pincode: '136118',
    full: 'Shop No. 21–22, Market Rd, Urban Estate, Sector 7, Kurukshetra, Haryana 136118',
  },
  phone: '+91 98960 07477',
  phoneRaw: '+919896007477',
  whatsapp: '+919896007477',
  email: '',
  hours: {
    weekdays: '10:00 AM – 8:00 PM',
    sunday: '10:00 AM – 2:00 PM',
    closed: '',
  },
  social: {
    instagram: '',
    facebook: '',
  },
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d76.8481!3d29.9695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRadhika+Jwellery!5e0!3m2!1sen!2sin!4v1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Radhika+Jwellery+Shop+No+21-22+Market+Rd+Urban+Estate+Sector+7+Kurukshetra+Haryana+136118',
  },
  whatsappBaseUrl: 'https://wa.me/919896007477',
} as const;

export function getWhatsAppUrl(message?: string): string {
  const base = storeInfo.whatsappBaseUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string, productUrl?: string): string {
  let message = `Hello Radhika Jewellery, I'm interested in the "${productName}" shown on your website. Could you share more details?`;
  if (productUrl) {
    message += `\n\n${productUrl}`;
  }
  return getWhatsAppUrl(message);
}

export function getCallUrl(): string {
  return `tel:${storeInfo.phoneRaw}`;
}
