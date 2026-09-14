import { storeInfo } from '@/data/store-info';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: storeInfo.name,
    description: storeInfo.description,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    telephone: storeInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: storeInfo.address.line1,
      addressLocality: storeInfo.address.city,
      addressRegion: storeInfo.address.state,
      postalCode: storeInfo.address.pincode,
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    priceRange: '₹₹₹',
  };
}

export function getProductSchema(product: {
  name: string;
  description: string;
  price: number | null;
  priceDisplay: string;
  images: string[];
  sku: string;
  availability: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: storeInfo.name,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price ?? undefined,
      availability:
        product.availability === 'in-stock'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
      seller: {
        '@type': 'Organization',
        name: storeInfo.name,
      },
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
