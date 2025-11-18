// app/(pages)/(catalog)/products/mappers.ts

import type { ProductListEntry, ProductVM, HealthCategoryRaw } from "./types";

function mapCategory(raw: HealthCategoryRaw): ProductVM["category"] {
  const value = raw?.trim().toLowerCase();

  if (value === "performance") return "Performance";
  if (value === "recovery") return "Recovery";

  // Fallback if something weird comes through
  return "Recovery";
}

// Map a single ProductList entry into a flat list of ProductVMs
export function toProductsVM(list: ProductListEntry | undefined): ProductVM[] {
  if (!list) return [];

  return list.product.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt ?? "",
    image: {
      url: p.productImage.url,
      width: p.productImage.width,
      height: p.productImage.height,
      // Prefer SEO image alt, then fallback to filename, then title
      alt: p.seo?.ogImageAlt || p.productImage.fileName || p.title,
    },
    category: mapCategory(p.healthCategory),
  }));
}
