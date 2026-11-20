/**
 * Product catalogue.
 *
 * ⚠️ SAMPLE DATA — prices and items are realistic placeholders.
 * Replace with the store's real list (ask the owner for their billing
 * software export; most POS systems can export CSV).
 *
 * Phase 2 (full online store): move this into a database/CMS and keep the
 * same `Product` shape so the UI doesn't need to change.
 */

export type CategoryId =
  | "staples"
  | "oils"
  | "spices"
  | "snacks"
  | "beverages"
  | "dairy"
  | "household"
  | "personal";

export type Category = {
  id: CategoryId;
  name: string;
  tamil: string;
  emoji: string;
  blurb: string;
};

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  unit: string;
  price: number;
  mrp?: number; // if set and > price, shown as a discount
  emoji: string;
  bestseller?: boolean;
};

export const categories: Category[] = [
  { id: "staples", name: "Rice & Staples", tamil: "அரிசி & மளிகை", emoji: "🌾", blurb: "Ponni, idli rice, dals, atta" },
  { id: "oils", name: "Oils & Ghee", tamil: "எண்ணெய் & நெய்", emoji: "🫒", blurb: "Gingelly, groundnut, ghee" },
  { id: "spices", name: "Masala & Spices", tamil: "மசாலா", emoji: "🌶️", blurb: "Sambar powder, whole spices" },
  { id: "snacks", name: "Snacks & Sweets", tamil: "தின்பண்டங்கள்", emoji: "🍪", blurb: "Biscuits, murukku, chocolates" },
  { id: "beverages", name: "Tea, Coffee & Drinks", tamil: "பானங்கள்", emoji: "☕", blurb: "Filter coffee, tea, juices" },
  { id: "dairy", name: "Dairy & Breakfast", tamil: "பால் பொருட்கள்", emoji: "🥛", blurb: "Milk, curd, bread, eggs" },
  { id: "household", name: "Home Care", tamil: "வீட்டு பராமரிப்பு", emoji: "🧺", blurb: "Detergents, cleaners, pooja" },
  { id: "personal", name: "Personal Care", tamil: "தனிப்பட்ட பராமரிப்பு", emoji: "🧴", blurb: "Soaps, shampoo, oral care" },
];

export const products: Product[] = [
  // Staples
  { id: "ponni-rice-5", name: "Ponni Boiled Rice", category: "staples", unit: "5 kg", price: 345, mrp: 380, emoji: "🍚", bestseller: true },
  { id: "idli-rice-5", name: "Idli Rice", category: "staples", unit: "5 kg", price: 260, emoji: "🍚" },
  { id: "toor-dal-1", name: "Toor Dal", category: "staples", unit: "1 kg", price: 152, mrp: 165, emoji: "🫘", bestseller: true },
  { id: "urad-dal-1", name: "Urad Dal (Whole)", category: "staples", unit: "1 kg", price: 138, emoji: "🫘" },
  { id: "atta-5", name: "Whole Wheat Atta", category: "staples", unit: "5 kg", price: 265, mrp: 290, emoji: "🌾" },
  { id: "sugar-1", name: "Sugar", category: "staples", unit: "1 kg", price: 46, emoji: "🧂" },
  { id: "rava-1", name: "Bombay Rava", category: "staples", unit: "1 kg", price: 58, emoji: "🌾" },

  // Oils
  { id: "gingelly-1", name: "Gingelly (Sesame) Oil", category: "oils", unit: "1 L", price: 320, mrp: 350, emoji: "🫗", bestseller: true },
  { id: "groundnut-1", name: "Cold-pressed Groundnut Oil", category: "oils", unit: "1 L", price: 235, emoji: "🥜" },
  { id: "sunflower-1", name: "Sunflower Oil", category: "oils", unit: "1 L", price: 152, mrp: 165, emoji: "🌻" },
  { id: "ghee-500", name: "Pure Cow Ghee", category: "oils", unit: "500 ml", price: 330, emoji: "🧈" },

  // Spices
  { id: "sambar-200", name: "Sambar Powder", category: "spices", unit: "200 g", price: 62, emoji: "🌶️", bestseller: true },
  { id: "chilli-250", name: "Chilli Powder", category: "spices", unit: "250 g", price: 78, emoji: "🌶️" },
  { id: "turmeric-200", name: "Turmeric Powder", category: "spices", unit: "200 g", price: 48, emoji: "🟡" },
  { id: "mustard-100", name: "Mustard Seeds", category: "spices", unit: "100 g", price: 18, emoji: "⚫" },
  { id: "tamarind-500", name: "Tamarind", category: "spices", unit: "500 g", price: 95, mrp: 110, emoji: "🟤" },

  // Snacks
  { id: "murukku-200", name: "Butter Murukku", category: "snacks", unit: "200 g", price: 55, emoji: "🥨" },
  { id: "marie-250", name: "Marie Biscuits", category: "snacks", unit: "250 g", price: 35, emoji: "🍪" },
  { id: "mixture-400", name: "Madras Mixture", category: "snacks", unit: "400 g", price: 90, mrp: 100, emoji: "🥜" },
  { id: "dairy-milk", name: "Milk Chocolate Bar", category: "snacks", unit: "50 g", price: 50, emoji: "🍫" },

  // Beverages
  { id: "filter-coffee-500", name: "Filter Coffee Powder", category: "beverages", unit: "500 g", price: 280, mrp: 310, emoji: "☕", bestseller: true },
  { id: "tea-500", name: "Premium Tea Dust", category: "beverages", unit: "500 g", price: 245, emoji: "🍵" },
  { id: "health-drink-500", name: "Malt Health Drink", category: "beverages", unit: "500 g", price: 255, emoji: "🥤" },
  { id: "mango-juice-1", name: "Mango Drink", category: "beverages", unit: "1.2 L", price: 75, emoji: "🥭" },

  // Dairy
  { id: "milk-500", name: "Toned Milk", category: "dairy", unit: "500 ml", price: 26, emoji: "🥛" },
  { id: "curd-500", name: "Fresh Curd", category: "dairy", unit: "500 g", price: 40, emoji: "🥣" },
  { id: "bread-400", name: "Sandwich Bread", category: "dairy", unit: "400 g", price: 45, emoji: "🍞" },
  { id: "eggs-6", name: "Farm Eggs", category: "dairy", unit: "6 pcs", price: 42, emoji: "🥚" },
  { id: "paneer-200", name: "Fresh Paneer", category: "dairy", unit: "200 g", price: 90, emoji: "🧀" },

  // Household
  { id: "detergent-1", name: "Detergent Powder", category: "household", unit: "1 kg", price: 120, mrp: 135, emoji: "🧺" },
  { id: "dishwash-500", name: "Dishwash Liquid", category: "household", unit: "500 ml", price: 105, emoji: "🧽" },
  { id: "floor-1", name: "Floor Cleaner", category: "household", unit: "1 L", price: 185, emoji: "🧴" },
  { id: "agarbatti", name: "Agarbatti (Pooja)", category: "household", unit: "100 sticks", price: 60, emoji: "🪔" },

  // Personal care
  { id: "soap-4", name: "Bath Soap (Pack of 4)", category: "personal", unit: "4 × 100 g", price: 160, mrp: 180, emoji: "🧼" },
  { id: "shampoo-340", name: "Shampoo", category: "personal", unit: "340 ml", price: 210, emoji: "🧴" },
  { id: "toothpaste-150", name: "Toothpaste", category: "personal", unit: "150 g", price: 95, emoji: "🪥" },
  { id: "coconut-oil-500", name: "Coconut Hair Oil", category: "personal", unit: "500 ml", price: 190, emoji: "🥥" },
];

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;

export const offers = products.filter((p) => p.mrp && p.mrp > p.price);
export const bestsellers = products.filter((p) => p.bestseller);

export const discountPct = (p: Product) =>
  p.mrp && p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
