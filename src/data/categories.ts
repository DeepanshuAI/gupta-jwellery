export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featured: boolean;
}

export const categories: Category[] = [
  {
    id: 'rings',
    name: 'Rings',
    slug: 'rings',
    description: 'From everyday elegance to statement designs, find rings crafted for every occasion.',
    image: '/images/categories/rings.jpg',
    featured: true,
  },
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    description: 'Jhumkas, studs, chandbalis and more — earrings that complete every look.',
    image: '/images/categories/earrings.jpg',
    featured: true,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Chokers, pendants and layered necklaces designed to be treasured.',
    image: '/images/categories/necklaces.jpg',
    featured: true,
  },
  {
    id: 'chains',
    name: 'Chains',
    slug: 'chains',
    description: 'Classic and contemporary gold chains for men and women.',
    image: '/images/categories/chains.jpg',
    featured: true,
  },
  {
    id: 'bangles',
    name: 'Bangles',
    slug: 'bangles',
    description: 'Traditional gold bangles with intricate craftsmanship.',
    image: '/images/categories/bangles.jpg',
    featured: true,
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    slug: 'bracelets',
    description: 'Delicate bracelets and kadas for everyday and special occasions.',
    image: '/images/products/bracelet-1.jpg',
    featured: true,
  },
  {
    id: 'bridal',
    name: 'Bridal',
    slug: 'bridal',
    description: 'Complete bridal jewellery sets for your most important day.',
    image: '/images/editorial/bridal-hero.jpg',
    featured: false,
  },
  {
    id: 'mens',
    name: "Men's",
    slug: 'mens',
    description: 'Rings, chains and bracelets designed for men.',
    image: '/images/categories/chains.jpg',
    featured: false,
  },
  {
    id: 'kids',
    name: 'Kids',
    slug: 'kids',
    description: 'Delicate jewellery designed for children.',
    image: '/images/products/ring-1.jpg',
    featured: false,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}
