// Central product catalogue. In a real deployment this would come from an API/CMS —
// kept as static data here so the whole app works with zero backend setup.

export const categories = ['All', 'Interior', 'Exterior']
export const colorFamilies = ['All', 'Warm', 'Cool', 'Neutral', 'Earth']

export const initialProducts = [
  {
    id: 'p1',
    name: 'Opus Silk Interior Emulsion',
    shade: 'Sunrise Amber',
    hex: '#FFB343',
    type: 'Interior',
    family: 'Warm',
    finish: 'Silk Matte',
    sizes: [
      { size: '1L', price: 349, stock: 42 },
      { size: '4L', price: 1299, stock: 28 },
      { size: '10L', price: 2999, stock: 11 },
      { size: '20L', price: 5599, stock: 4 },
    ],
    costPerUnit: { '1L': 210, '4L': 780, '10L': 1900, '20L': 3600 },
    sold: { '1L': 96, '4L': 54, '10L': 19, '20L': 6 },
  },
  {
    id: 'p2',
    name: 'Opus WeatherShield Exterior',
    shade: 'Terracotta Bloom',
    hex: '#C2410C',
    type: 'Exterior',
    family: 'Earth',
    finish: 'Weather-Resistant Matte',
    sizes: [
      { size: '1L', price: 429, stock: 30 },
      { size: '4L', price: 1599, stock: 18 },
      { size: '10L', price: 3699, stock: 3 },
      { size: '20L', price: 6899, stock: 0 },
    ],
    costPerUnit: { '1L': 260, '4L': 960, '10L': 2350, '20L': 4400 },
    sold: { '1L': 71, '4L': 39, '10L': 12, '20L': 5 },
  },
  {
    id: 'p3',
    name: 'Opus Royale Luxury Emulsion',
    shade: 'Midnight Sage',
    hex: '#4B5D4A',
    type: 'Interior',
    family: 'Cool',
    finish: 'Premium Sheen',
    sizes: [
      { size: '1L', price: 519, stock: 25 },
      { size: '4L', price: 1899, stock: 14 },
      { size: '10L', price: 4399, stock: 6 },
      { size: '20L', price: 8299, stock: 2 },
    ],
    costPerUnit: { '1L': 310, '4L': 1150, '10L': 2700, '20L': 5100 },
    sold: { '1L': 58, '4L': 31, '10L': 9, '20L': 3 },
  },
  {
    id: 'p4',
    name: 'Opus Textura Exterior Finish',
    shade: 'Stone Grey',
    hex: '#8A8580',
    type: 'Exterior',
    family: 'Neutral',
    finish: 'Textured',
    sizes: [
      { size: '1L', price: 389, stock: 33 },
      { size: '4L', price: 1449, stock: 20 },
      { size: '10L', price: 3299, stock: 9 },
      { size: '20L', price: 6199, stock: 5 },
    ],
    costPerUnit: { '1L': 235, '4L': 870, '10L': 2050, '20L': 3850 },
    sold: { '1L': 64, '4L': 28, '10L': 8, '20L': 4 },
  },
  {
    id: 'p5',
    name: 'Opus Pure Interior Emulsion',
    shade: 'Ivory Cloud',
    hex: '#F5EFE6',
    type: 'Interior',
    family: 'Neutral',
    finish: 'Soft Matte',
    sizes: [
      { size: '1L', price: 299, stock: 55 },
      { size: '4L', price: 1099, stock: 40 },
      { size: '10L', price: 2599, stock: 17 },
      { size: '20L', price: 4899, stock: 8 },
    ],
    costPerUnit: { '1L': 180, '4L': 660, '10L': 1580, '20L': 3000 },
    sold: { '1L': 112, '4L': 70, '10L': 24, '20L': 10 },
  },
  {
    id: 'p6',
    name: 'Opus Marine Exterior Guard',
    shade: 'Deep Teal',
    hex: '#1F5C5C',
    type: 'Exterior',
    family: 'Cool',
    finish: 'High Gloss',
    sizes: [
      { size: '1L', price: 459, stock: 12 },
      { size: '4L', price: 1699, stock: 7 },
      { size: '10L', price: 3899, stock: 2 },
      { size: '20L', price: 7299, stock: 0 },
    ],
    costPerUnit: { '1L': 280, '4L': 1020, '10L': 2450, '20L': 4650 },
    sold: { '1L': 33, '4L': 21, '10L': 6, '20L': 2 },
  },
]

export function stockStatus(stock) {
  if (stock === 0) return { label: 'Out of stock', tone: 'out' }
  if (stock <= 5) return { label: 'Low stock', tone: 'low' }
  return { label: 'In stock', tone: 'in' }
}
