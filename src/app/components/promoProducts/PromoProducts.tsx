import { hygraph } from "@/lib/hygraph";
import { PROMO_PRODUCTS } from "@/lib/queries";
import { PromoBlock } from "./types";

// components
import SectionLayout from "../sectionLayout/sectionLayout";

export default async function PromoProducts() {
  const { carouselSections } = await hygraph<PromoBlock>({
    query: PROMO_PRODUCTS,
    variables: { limit: 3, stage: "PUBLISHED" },
  });

  const data = carouselSections[0];

  const layout = data?.layout;
  const productItems = data?.productList;

  const list = productItems?.product;
  console.log(list);

  return (
    <SectionLayout layout={layout}>
      <p>Stuff</p>
    </SectionLayout>
  );
}
