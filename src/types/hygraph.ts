export type ProductCard = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  productImage?: { url: string } | null;
};

export type PromoProductsResult = {
  productLists: { id: string; product: ProductCard[] }[];
};
