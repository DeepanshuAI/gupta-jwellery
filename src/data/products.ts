export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: string;
  collection: string[];
  description: string;
  price: number | null;
  priceDisplay: string;
  material: string;
  purity: string;
  weight: string;
  gemstone: string;
  images: string[];
  video?: string;
  availability: 'in-stock' | 'made-to-order' | 'enquire';
  featured: boolean;
  bestseller: boolean;
  occasion: string[];
  style: string[];
}

export const products: Product[] = [
  // ── RINGS ──
  {
    id: 'p1',
    sku: 'GJ-RNG-001',
    name: 'Heritage Emerald Cocktail Ring',
    slug: 'heritage-emerald-cocktail-ring',
    category: 'rings',
    collection: ['statement', 'festive'],
    description: 'A stunning cocktail ring featuring intricate filigree work with an emerald centerpiece, surrounded by diamond accents and ruby details. Handcrafted in 22K gold.',
    price: null,
    priceDisplay: 'Enquire for Price',
    material: 'Gold',
    purity: '22K',
    weight: '8.5 g',
    gemstone: 'Emerald, Diamond, Ruby',
    images: ['/images/products/ring-1.jpg'],
    availability: 'enquire',
    featured: true,
    bestseller: true,
    occasion: ['wedding', 'festive', 'engagement'],
    style: ['traditional', 'statement'],
  },
  {
    id: 'p2',
    sku: 'GJ-RNG-002',
    name: 'Classic Gold Band',
    slug: 'classic-gold-band',
    category: 'rings',
    collection: ['everyday'],
    description: 'A timeless gold band with a subtle matte finish. Perfect for everyday wear or as a wedding band.',
    price: 18500,
    priceDisplay: '₹18,500',
    material: 'Gold',
    purity: '22K',
    weight: '4.2 g',
    gemstone: '—',
    images: ['/images/products/ring-1.jpg'],
    availability: 'in-stock',
    featured: false,
    bestseller: true,
    occasion: ['everyday', 'wedding'],
    style: ['minimal', 'contemporary'],
  },
  {
    id: 'p3',
    sku: 'GJ-RNG-003',
    name: 'Diamond Solitaire Ring',
    slug: 'diamond-solitaire-ring',
    category: 'rings',
    collection: ['statement'],
    description: 'An elegant solitaire ring featuring a brilliant-cut diamond set in 18K white gold. A timeless choice for engagements.',
    price: null,
    priceDisplay: 'Enquire for Price',
    material: 'Gold',
    purity: '18K',
    weight: '3.8 g',
    gemstone: 'Diamond',
    images: ['/images/products/ring-1.jpg'],
    availability: 'enquire',
    featured: true,
    bestseller: false,
    occasion: ['engagement', 'gift'],
    style: ['contemporary', 'minimal'],
  },

  // ── EARRINGS ──
  {
    id: 'p4',
    sku: 'GJ-EAR-001',
    name: 'Heritage Pearl Jhumka',
    slug: 'heritage-pearl-jhumka',
    category: 'earrings',
    collection: ['festive', 'statement'],
    description: 'Exquisite gold jhumka earrings with intricate paisley detailing and pearl accents. A statement piece for celebrations.',
    price: 42000,
    priceDisplay: '₹42,000',
    material: 'Gold',
    purity: '22K',
    weight: '14.5 g',
    gemstone: 'Pearl',
    images: ['/images/products/earring-1.jpg'],
    availability: 'in-stock',
    featured: true,
    bestseller: true,
    occasion: ['festive', 'wedding'],
    style: ['traditional', 'statement'],
  },
  {
    id: 'p5',
    sku: 'GJ-EAR-002',
    name: 'Diamond Stud Earrings',
    slug: 'diamond-stud-earrings',
    category: 'earrings',
    collection: ['everyday'],
    description: 'Classic diamond stud earrings set in 18K gold. The perfect everyday luxury.',
    price: 28000,
    priceDisplay: '₹28,000',
    material: 'Gold',
    purity: '18K',
    weight: '3.2 g',
    gemstone: 'Diamond',
    images: ['/images/products/earring-1.jpg'],
    availability: 'in-stock',
    featured: false,
    bestseller: true,
    occasion: ['everyday', 'gift'],
    style: ['minimal', 'contemporary'],
  },
  {
    id: 'p6',
    sku: 'GJ-EAR-003',
    name: 'Chandbali Gold Earrings',
    slug: 'chandbali-gold-earrings',
    category: 'earrings',
    collection: ['bridal', 'festive'],
    description: 'Traditional chandbali earrings with moon-shaped design, kundan work and pearl drops. Crafted for bridal occasions.',
    price: null,
    priceDisplay: 'Enquire for Price',
    material: 'Gold',
    purity: '22K',
    weight: '18.0 g',
    gemstone: 'Kundan, Pearl',
    images: ['/images/products/earring-1.jpg'],
    availability: 'made-to-order',
    featured: true,
    bestseller: false,
    occasion: ['wedding', 'festive'],
    style: ['traditional', 'bridal'],
  },

  // ── NECKLACES ──
  {
    id: 'p7',
    sku: 'GJ-NCK-001',
    name: 'Royal Bridal Choker',
    slug: 'royal-bridal-choker',
    category: 'necklaces',
    collection: ['bridal', 'statement'],
    description: 'A magnificent bridal choker necklace with intricate gold work, kundan stones and pearl embellishments. The centrepiece of any bridal ensemble.',
    price: null,
    priceDisplay: 'Enquire for Price',
    material: 'Gold',
    purity: '22K',
    weight: '85.0 g',
    gemstone: 'Kundan, Pearl, Ruby, Emerald',
    images: ['/images/products/necklace-1.jpg'],
    availability: 'made-to-order',
    featured: true,
    bestseller: true,
    occasion: ['wedding'],
    style: ['traditional', 'bridal', 'statement'],
  },
  {
    id: 'p8',
    sku: 'GJ-NCK-002',
    name: 'Delicate Chain Pendant',
    slug: 'delicate-chain-pendant',
    category: 'necklaces',
    collection: ['everyday'],
    description: 'A refined gold chain with a delicate floral pendant. Lightweight and perfect for daily wear.',
    price: 15500,
    priceDisplay: '₹15,500',
    material: 'Gold',
    purity: '18K',
    weight: '5.2 g',
    gemstone: '—',
    images: ['/images/products/necklace-1.jpg'],
    availability: 'in-stock',
    featured: false,
    bestseller: false,
    occasion: ['everyday'],
    style: ['minimal', 'contemporary'],
  },
  {
    id: 'p9',
    sku: 'GJ-NCK-003',
    name: 'Temple Necklace Set',
    slug: 'temple-necklace-set',
    category: 'necklaces',
    collection: ['festive', 'statement'],
    description: 'A traditional South Indian-inspired temple necklace with goddess motifs and gold coin details.',
    price: 125000,
    priceDisplay: '₹1,25,000',
    material: 'Gold',
    purity: '22K',
    weight: '45.0 g',
    gemstone: 'Ruby',
    images: ['/images/products/necklace-1.jpg'],
    availability: 'in-stock',
    featured: true,
    bestseller: false,
    occasion: ['festive', 'wedding'],
    style: ['traditional', 'statement'],
  },

  // ── CHAINS ──
  {
    id: 'p10',
    sku: 'GJ-CHN-001',
    name: 'Cuban Link Gold Chain',
    slug: 'cuban-link-gold-chain',
    category: 'chains',
    collection: ['statement'],
    description: 'A bold Cuban link chain in solid 22K gold. Polished to perfection for a striking finish.',
    price: 95000,
    priceDisplay: '₹95,000',
    material: 'Gold',
    purity: '22K',
    weight: '25.0 g',
    gemstone: '—',
    images: ['/images/products/chain-1.jpg'],
    availability: 'in-stock',
    featured: true,
    bestseller: true,
    occasion: ['everyday'],
    style: ['contemporary', 'statement'],
  },
  {
    id: 'p11',
    sku: 'GJ-CHN-002',
    name: 'Classic Rope Chain',
    slug: 'classic-rope-chain',
    category: 'chains',
    collection: ['everyday'],
    description: 'A timeless rope chain in 22K gold. Versatile enough for everyday wear or layering.',
    price: 55000,
    priceDisplay: '₹55,000',
    material: 'Gold',
    purity: '22K',
    weight: '15.0 g',
    gemstone: '—',
    images: ['/images/products/chain-1.jpg'],
    availability: 'in-stock',
    featured: false,
    bestseller: false,
    occasion: ['everyday'],
    style: ['minimal', 'contemporary'],
  },

  // ── BANGLES ──
  {
    id: 'p12',
    sku: 'GJ-BNG-001',
    name: 'Filigree Gold Bangle Set',
    slug: 'filigree-gold-bangle-set',
    category: 'bangles',
    collection: ['festive', 'statement'],
    description: 'A set of three exquisite gold bangles featuring delicate filigree patterns and floral motifs. Each bangle is individually handcrafted.',
    price: 78000,
    priceDisplay: '₹78,000',
    material: 'Gold',
    purity: '22K',
    weight: '32.0 g',
    gemstone: '—',
    images: ['/images/products/bangle-1.jpg'],
    availability: 'in-stock',
    featured: true,
    bestseller: true,
    occasion: ['festive', 'wedding'],
    style: ['traditional'],
  },
  {
    id: 'p13',
    sku: 'GJ-BNG-002',
    name: 'Diamond Accent Kada',
    slug: 'diamond-accent-kada',
    category: 'bangles',
    collection: ['everyday', 'statement'],
    description: 'A substantial gold kada with delicate diamond accents. Pairs beautifully with both traditional and western attire.',
    price: 65000,
    priceDisplay: '₹65,000',
    material: 'Gold',
    purity: '18K',
    weight: '22.0 g',
    gemstone: 'Diamond',
    images: ['/images/products/bangle-1.jpg'],
    availability: 'in-stock',
    featured: false,
    bestseller: false,
    occasion: ['everyday', 'festive'],
    style: ['contemporary'],
  },

  // ── BRACELETS ──
  {
    id: 'p14',
    sku: 'GJ-BRC-001',
    name: 'Flora Diamond Bracelet',
    slug: 'flora-diamond-bracelet',
    category: 'bracelets',
    collection: ['everyday'],
    description: 'A delicate gold chain bracelet with a floral diamond cluster. Light, feminine and elegant.',
    price: 32000,
    priceDisplay: '₹32,000',
    material: 'Gold',
    purity: '18K',
    weight: '6.5 g',
    gemstone: 'Diamond',
    images: ['/images/products/bracelet-1.jpg'],
    availability: 'in-stock',
    featured: true,
    bestseller: true,
    occasion: ['everyday', 'gift'],
    style: ['minimal', 'contemporary'],
  },
  {
    id: 'p15',
    sku: 'GJ-BRC-002',
    name: "Men's Classic Gold Bracelet",
    slug: 'mens-classic-gold-bracelet',
    category: 'bracelets',
    collection: ['statement'],
    description: 'A solid gold bracelet designed for men. Bold links with a polished finish.',
    price: 72000,
    priceDisplay: '₹72,000',
    material: 'Gold',
    purity: '22K',
    weight: '20.0 g',
    gemstone: '—',
    images: ['/images/products/chain-1.jpg'],
    availability: 'in-stock',
    featured: false,
    bestseller: false,
    occasion: ['everyday', 'gift'],
    style: ['contemporary', 'statement'],
  },

  // ── BRIDAL ──
  {
    id: 'p16',
    sku: 'GJ-BRD-001',
    name: 'Complete Bridal Set — Maharani',
    slug: 'complete-bridal-set-maharani',
    category: 'bridal',
    collection: ['bridal'],
    description: 'A complete bridal jewellery set including a choker necklace, long haar, chandbali earrings, maang tikka and a set of bangles. Crafted in 22K gold with kundan and pearl work.',
    price: null,
    priceDisplay: 'Enquire for Price',
    material: 'Gold',
    purity: '22K',
    weight: '180.0 g',
    gemstone: 'Kundan, Pearl, Ruby',
    images: ['/images/editorial/bridal-hero.jpg'],
    availability: 'made-to-order',
    featured: true,
    bestseller: true,
    occasion: ['wedding'],
    style: ['traditional', 'bridal', 'statement'],
  },
  {
    id: 'p17',
    sku: 'GJ-BRD-002',
    name: 'Bridal Maang Tikka',
    slug: 'bridal-maang-tikka',
    category: 'bridal',
    collection: ['bridal'],
    description: 'An ornate maang tikka with polki diamonds and pearl drops. The finishing touch to any bridal look.',
    price: 35000,
    priceDisplay: '₹35,000',
    material: 'Gold',
    purity: '22K',
    weight: '12.0 g',
    gemstone: 'Polki Diamond, Pearl',
    images: ['/images/editorial/bridal-hero.jpg'],
    availability: 'in-stock',
    featured: false,
    bestseller: false,
    occasion: ['wedding'],
    style: ['traditional', 'bridal'],
  },

  // ── MEN'S ──
  {
    id: 'p18',
    sku: 'GJ-MEN-001',
    name: "Men's Signet Ring",
    slug: 'mens-signet-ring',
    category: 'mens',
    collection: ['statement'],
    description: 'A bold gold signet ring with a matte finish and beveled edges. Substantial and masculine.',
    price: 28000,
    priceDisplay: '₹28,000',
    material: 'Gold',
    purity: '22K',
    weight: '8.0 g',
    gemstone: '—',
    images: ['/images/products/ring-1.jpg'],
    availability: 'in-stock',
    featured: true,
    bestseller: false,
    occasion: ['everyday', 'gift'],
    style: ['contemporary', 'statement'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection.includes(collection));
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.gemstone.toLowerCase().includes(q) ||
      p.occasion.some((o) => o.toLowerCase().includes(q)) ||
      p.style.some((s) => s.toLowerCase().includes(q))
  );
}
