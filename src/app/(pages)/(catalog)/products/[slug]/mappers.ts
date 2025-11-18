import type {
  HealthCategory,
  ProductBlockRecord,
  ProductCategoryVM,
  ProductDetailVM,
  PairsWithVM,
} from "./types";

function mapHealthCategory(
  cat: HealthCategory | null
): ProductCategoryVM | null {
  if (cat === "PERFORMANCE") return "Performance";
  if (cat === "RECOVERY") return "Recovery";
  return null;
}

function splitLines(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function mapPairsWith(
  items: ProductBlockRecord["pairsWellWith"]
): PairsWithVM[] {
  if (!items?.length) return [];
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    imageUrl: item.image?.url ?? null,
  }));
}

export function toProductDetailVM(record: ProductBlockRecord): ProductDetailVM {
  const images: string[] = [
    record.productImage?.url,
    ...record.gallery.map((g) => g.url),
  ].filter(Boolean);

  return {
    name: record.title,
    category: mapHealthCategory(record.healthCategory),
    images,
    description: record.longDescription ?? record.excerpt ?? "",

    packageSize: record.productSpec?.packageSize ?? "",
    servings: record.productSpec?.servings ?? "",

    benefits: splitLines(record.benefits),
    whenToUse: splitLines(record.whenToUse),
    howToUse: record.howToUse ?? "",
    pairsWellWith: mapPairsWith(record.pairsWellWith),

    complianceNotes: record.complianceNotes ?? "",
    allergens: record.productSpec?.allergens ?? "",
  };
}
