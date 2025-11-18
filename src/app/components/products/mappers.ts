import type { ProductCard, SectionBase } from "@/types/components";
import { imageProps, isNonEmpty } from "@/lib/helpers";

type Selection = {
  id: string;
  title: string | null;
  excerpt: string | null;
  image: { url: string; width: number; height: number; alt: string };
  slug: string | null;
};

type PromoViewModel = {
  layout: SectionBase | null;
  items: Selection[];
};

function toSelection(p: ProductCard): Selection {
  const hasId = isNonEmpty(p.id);
  const title = isNonEmpty(p.title) ? p.title : null;
  const excerpt = isNonEmpty(p.excerpt) ? p.excerpt : null;
  const slug = isNonEmpty(p.slug) ? p.slug : null;
  const baseImg = imageProps(p.productImage, title ?? `${p.title} display`);
  const imgAlt = isNonEmpty(p.title)
    ? `${p.title} display`
    : "Probell product Image ";

  return {
    id: hasId ? p.id : slug ?? "unkown",
    title,
    excerpt,
    slug,
    image: { ...baseImg, alt: imgAlt },
  };
}

export function toPromoVM(section?: {
  layout?: SectionBase | null;
  productList?: { product?: ProductCard[] | null } | null;
}): PromoViewModel {
  const list = section?.productList?.product;
  const items = Array.isArray(list) ? list.map(toSelection) : [];

  return {
    layout: section?.layout ?? null,
    items,
  };
}
