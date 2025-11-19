import { notFound } from "next/navigation";
import { hygraph } from "@/lib/hygraph";
import { PRODUCT_DETAIL } from "@/lib/queries";

import type { ProductDetailListResult, ProductDetailRecord } from "./types";

import { toProductDetailVM } from "./mappers";
import ProductDetailPageClient from "@/app/components/products/ProductDetailPageClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { productLists } = await hygraph<ProductDetailListResult>({
    query: PRODUCT_DETAIL,
    variables: { stage: "PUBLISHED" },
  });

  const allProducts: ProductDetailRecord[] = productLists.flatMap(
    (list) => list.product
  );

  const record = allProducts.find((p) => p.slug === slug);

  if (!record) return notFound();

  const vm = toProductDetailVM(record);

  return <ProductDetailPageClient product={vm} />;
}
