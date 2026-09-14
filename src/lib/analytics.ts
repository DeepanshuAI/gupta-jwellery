declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function trackWhatsAppClick(productName?: string) {
  trackEvent('whatsapp_click', { product_name: productName });
}

export function trackCallClick() {
  trackEvent('call_click');
}

export function trackAppointmentSubmit(jewelleryType: string) {
  trackEvent('appointment_submit', { jewellery_type: jewelleryType });
}

export function trackDirectionsClick() {
  trackEvent('directions_click');
}

export function trackProductView(productName: string, category: string) {
  trackEvent('product_view', { product_name: productName, category });
}

export function trackWishlistAdd(productName: string) {
  trackEvent('wishlist_add', { product_name: productName });
}

export function trackSearch(query: string) {
  trackEvent('search', { search_term: query });
}

export function trackCategoryView(category: string) {
  trackEvent('category_view', { category });
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
