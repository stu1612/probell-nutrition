import { ProductCard, SectionBase } from "@/types/components";

type ProductBlock = {
  id: string;
  layout: SectionBase;
  productList: {
    id: string;
    product: ProductCard[];
  };
};

export type PromoBlock = {
  carouselSections: ProductBlock[];
};
