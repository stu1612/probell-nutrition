export type HealthCategory = "PERFORMANCE" | "RECOVERY";

export type ProductImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
};

export type ProductRecord = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  healthCategory: HealthCategory;
  image: ProductImage;
};

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
