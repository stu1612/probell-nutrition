// app/components/products/mappers.ts
import type { ProductListEntry, ProductVM, HealthCategory } from "./types";

function mapCategory(healthCategory: HealthCategory): ProductVM["category"] {
  switch (healthCategory) {
    case "PERFORMANCE":
      return "Performance";
    case "RECOVERY":
      return "Recovery";
  }
}

export function toProductsVM(list: ProductListEntry | undefined): ProductVM[] {
  if (!list) return [];

  return list.product.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt ?? "",
    image: {
      url: p.image.url,
      width: p.image.width,
      height: p.image.height,
      alt: p.image.alt,
    },
    category: mapCategory(p.healthCategory),
  }));
}
