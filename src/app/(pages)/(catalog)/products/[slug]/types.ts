export type HealthCategory = "PERFORMANCE" | "RECOVERY";

export type UnitSizeEnum = "SIZE_SMALL" | "SIZE_MEDIUM" | "SIZE_LARGE";

export type ServingsPerUnitEnum =
  | "SERVES_132"
  | "SERVES_60"
  | "SERVES_33"
  | "SERVES_30";

export type AllergyTag =
  | "CONTAINS_MILK"
  | "CONTAINS_SOY"
  | "CONTAINS_GLUTEN"
  | "CONTAINS_EGGS"
  | "CONTAINS_NUTS"
  | "IS_VEGAN"
  | "IS_SUGAR_FREE"
  | "IS_LACTOSE_FREE"
  | "IS_CAFFEINE_FREE";

// ----- Shared image type -----

export type DetailImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  fileName: string;
};

// ----- ProductSpec from CMS -----

export type ProductSpec = {
  unitSize: UnitSizeEnum[]; // LIST, NON_NULL
  servingsSize: string | null; // e.g. "33 g"
  notes: string | null;
  ingredients: string[]; // LIST, NON_NULL (String)
  unitsPerCase: number | null;
  servingsPerUnit: ServingsPerUnitEnum[]; // LIST, NON_NULL
  allergyList: AllergyTag[]; // LIST, NON_NULL
  nutritionalInformation: string | null;
};

// ----- Pairs-with component from CMS -----

export type PairsWithItem = {
  id: string;
  title: string;
  slug: string;
  productImage: DetailImage | null;
};

// ----- Raw record from CMS for the detail page -----

export type ProductDetailRecord = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  longDescription: string | null;
  healthCategory: HealthCategory | null;
  isAvailable: boolean | null;

  productSpec: ProductSpec | null;

  productImage: DetailImage;
  gallery: DetailImage[];

  benefits: string | null;
  whenToUse: string | null;
  howToUse: string | null;

  pairsWellWith: PairsWithItem[];

  complianceNotes: string | null;
};

export type ProductDetailListResult = {
  productLists: {
    id: string;
    product: ProductDetailRecord[];
  }[];
};

// ----- View-model types for the client component -----

export type ProductCategoryVM = "Performance" | "Recovery";

export type PairsWithVM = {
  id: string;
  title: string;
  slug: string;
  imageUrl: string | null;
};

export type ProductDetailVM = {
  name: string;
  category: ProductCategoryVM | null;
  images: string[];

  description: string;

  packageSize: string; // "Small", "Medium", "Large"
  servings: string; // "132 servings"
  servingSize: string; // "33 g"
  allergens: string; // "Contains milk, Contains soy"

  benefits: string[];
  whenToUse: string[];
  howToUse: string;

  pairsWellWith: PairsWithVM[];

  complianceNotes: string;
};
