import { notFound } from "next/navigation";
import { hygraph } from "@/lib/hygraph";
import { PRODUCT_DETAIL } from "@/lib/queries";

import type { ProductDetailListResult, ProductDetailRecord } from "./types";

// import { toProductDetailVM } from "./mappers";
// import ProductDetailPageClient from "@/app/components/products/ProductDetailPageClient";

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const { productLists } = await hygraph<ProductDetailListResult>({
    query: PRODUCT_DETAIL,
    variables: { stage: "PUBLISHED" },
  });

  console.log(productLists);

  return (
    <div>
      <p>test</p>
    </div>
  );
}
