// CMS enum
export type HealthCategory = "PERFORMANCE" | "RECOVERY";

// Simple image type
export type CmsImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  fileName: string;
};

// Pairs-with component
export type PairsWithItem = {
  id: string;
  title: string;
  slug: string;
  image: CmsImage | null;
};

// Product spec component
export type ProductSpec = {
  packageSize: string | null;
  servings: string | null;
  allergens: string | null;
};

// Raw record from Hygraph
export type ProductBlockRecord = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  longDescription: string | null;
  healthCategory: HealthCategory | null;
  isAvailable: boolean | null;
  productSpec: ProductSpec | null;
  productImage: CmsImage;
  gallery: CmsImage[];
  benefits: string | null;
  whenToUse: string | null;
  howToUse: string | null;
  pairsWellWith: PairsWithItem[];
  complianceNotes: string | null;
};

export type ProductBySlugResult = {
  productBlock: ProductBlockRecord | null;
};

// View-model types

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
  description: string; // longDescription
  packageSize: string;
  servings: string;

  benefits: string[]; // split lines
  whenToUse: string[]; // split lines
  howToUse: string;
  pairsWellWith: PairsWithVM[];

  complianceNotes: string;
  allergens: string;
};
