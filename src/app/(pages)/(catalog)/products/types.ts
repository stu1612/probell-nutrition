// app/(pages)/(catalog)/products/types.ts

// Raw enum coming from Hygraph
export type HealthCategoryRaw = string | null;

// Raw image from CMS (Asset)
export type ProductImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  fileName: string;
};

// Raw SEO object from CMS
export type ProductSeo = {
  ogImageAlt: string | null;
};

// Raw ProductBlock from CMS
export type ProductRecord = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  healthCategory: HealthCategoryRaw;
  isAvailable: boolean | null;
  productImage: ProductImage;
  seo: ProductSeo | null;
};

// Raw ProductList wrapper
export type ProductListEntry = {
  id: string;
  product: ProductRecord[];
};

export type ProductListResult = {
  productLists: ProductListEntry[];
};

export type ProductCategoryVM = "Performance" | "Recovery";

export type ProductVM = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  category: ProductCategoryVM;
};
