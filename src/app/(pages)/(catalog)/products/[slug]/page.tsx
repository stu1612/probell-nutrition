// app/(pages)/(catalog)/products/[slug]/page.tsx

import { notFound } from "next/navigation";
import { hygraph } from "@/lib/hygraph";
import { PRODUCT_BY_SLUG } from "@/lib/queries";

import type { ProductBySlugResult } from "./types";
import { toProductDetailVM } from "./mappers";
import ProductDetailPageClient from "@/app/components/products/ProductDetailPageClient";

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const { productBlock } = await hygraph<ProductBySlugResult>({
    query: PRODUCT_BY_SLUG,
    variables: { slug, stage: "PUBLISHED" },
  });

  console.log(productBlock);

  // if (!productBlock) return notFound();

  // const vm = toProductDetailVM(productBlock);

  // return <ProductDetailPageClient product={vm} />;
  return (
    <div>
      <p>hello</p>
    </div>
  );
}
