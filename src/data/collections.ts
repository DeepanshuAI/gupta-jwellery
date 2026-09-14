export interface Collection {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  featured: boolean;
}

export const collections: Collection[] = [
  {
    id: 'bridal',
    name: 'Bridal Collection',
    slug: 'bridal',
    tagline: 'For the Beginning of Forever',
    description: 'Jewellery designed to make every celebration unforgettable. From necklaces to bangles, maang tikka to complete sets.',
    image: '/images/editorial/bridal-hero.jpg',
    featured: true,
  },
  {
    id: 'everyday',
    name: 'Everyday Elegance',
    slug: 'everyday',
    tagline: 'Beauty in Simplicity',
    description: 'Lightweight, refined pieces designed to complement your everyday style.',
    image: '/images/products/bracelet-1.jpg',
    featured: true,
  },
  {
    id: 'festive',
    name: 'Festive Collection',
    slug: 'festive',
    tagline: 'Celebrate in Gold',
    description: 'Statement pieces for Diwali, Karwa Chauth, Navratri and every festival worth celebrating.',
    image: '/images/products/necklace-1.jpg',
    featured: true,
  },
  {
    id: 'statement',
    name: 'Statement Pieces',
    slug: 'statement',
    tagline: 'Made to Be Remembered',
    description: 'Bold, unforgettable designs that command attention.',
    image: '/images/products/earring-1.jpg',
    featured: true,
  },
  {
    id: 'couple',
    name: 'Couple Collection',
    slug: 'couple',
    tagline: 'Together in Gold',
    description: 'Matching rings, bracelets and chains for couples.',
    image: '/images/products/ring-1.jpg',
    featured: false,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getFeaturedCollections(): Collection[] {
  return collections.filter((c) => c.featured);
}
