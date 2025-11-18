import { hygraph } from "@/lib/hygraph";
import { ProductListResult } from "./types";
import { PRODUCT_LIST } from "@/lib/queries/products";
import { toProductsVM } from "./mappers";
import ProductsPageClient from "@/app/components/products/ProductsPageClient";

export default async function ProductsPage() {
  const { productLists } = await hygraph<ProductListResult>({
    query: PRODUCT_LIST,
    variables: { stage: "PUBLISHED" },
  });

  const list = productLists?.[0];
  const products = toProductsVM(list);

  return <ProductsPageClient products={products} />;
}
