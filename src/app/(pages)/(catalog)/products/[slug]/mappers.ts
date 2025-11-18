import type {
  ProductDetailRecord,
  ProductDetailVM,
  ProductCategoryVM,
  HealthCategory,
  UnitSizeEnum,
  ServingsPerUnitEnum,
  AllergyTag,
  PairsWithItem,
  PairsWithVM,
} from "./types";

// ---- small helpers ----

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

function mapPairsWith(items: PairsWithItem[]): PairsWithVM[] {
  if (!items?.length) return [];
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    imageUrl: item.productImage?.url ?? null,
  }));
}

// ---- object-literal lookups ----

const UNIT_SIZE_LABELS: Record<UnitSizeEnum, string> = {
  SIZE_SMALL: "Small",
  SIZE_MEDIUM: "Medium",
  SIZE_LARGE: "Large",
};

const SERVINGS_LABELS: Record<ServingsPerUnitEnum, string> = {
  SERVES_132: "132 servings",
  SERVES_60: "60 servings",
  SERVES_33: "33 servings",
  SERVES_30: "30 servings",
};

const ALLERGY_LABELS: Record<AllergyTag, string> = {
  CONTAINS_MILK: "Contains milk",
  CONTAINS_SOY: "Contains soy",
  CONTAINS_GLUTEN: "Contains gluten",
  CONTAINS_EGGS: "Contains eggs",
  CONTAINS_NUTS: "Contains nuts",
  IS_VEGAN: "Suitable for vegans",
  IS_SUGAR_FREE: "Sugar free",
  IS_LACTOSE_FREE: "Lactose free",
  IS_CAFFEINE_FREE: "Caffeine free",
};

function mapUnitSize(list: UnitSizeEnum[] | null | undefined): string {
  if (!list || list.length === 0) return "";
  const first = list[0];
  return UNIT_SIZE_LABELS[first] ?? "";
}

function mapServingsPerUnit(
  list: ServingsPerUnitEnum[] | null | undefined
): string {
  if (!list || list.length === 0) return "";
  const first = list[0];
  return SERVINGS_LABELS[first] ?? "";
}

function mapAllergyList(list: AllergyTag[] | null | undefined): string {
  if (!list || list.length === 0) return "";
  return list
    .map((tag) => ALLERGY_LABELS[tag] ?? "")
    .filter(Boolean)
    .join(", ");
}

// ---- main mapper ----

export function toProductDetailVM(
  record: ProductDetailRecord
): ProductDetailVM {
  const images: string[] = [
    record.productImage?.url,
    ...record.gallery.map((g) => g.url),
  ].filter(Boolean);

  const spec = record.productSpec;

  return {
    name: record.title,
    category: mapHealthCategory(record.healthCategory),
    images,

    description: record.longDescription ?? record.excerpt ?? "",

    packageSize: mapUnitSize(spec?.unitSize),
    servings: mapServingsPerUnit(spec?.servingsPerUnit),
    servingSize: spec?.servingsSize ?? "",
    allergens: mapAllergyList(spec?.allergyList),

    benefits: splitLines(record.benefits),
    whenToUse: splitLines(record.whenToUse),
    howToUse: record.howToUse ?? "",

    pairsWellWith: mapPairsWith(record.pairsWellWith),

    complianceNotes: record.complianceNotes ?? "",
  };
}
