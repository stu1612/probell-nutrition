import { hygraph } from "@/lib/hygraph";
import { PROMO_PRODUCTS } from "@/lib/queries";
import { PromoBlock } from "./types";
import { toPromoVM } from "./mappers";

// components
import SectionLayout from "../sectionLayout/sectionLayout";

export default async function PromoProducts() {
  const { carouselSections } = await hygraph<PromoBlock>({
    query: PROMO_PRODUCTS,
    variables: { limit: 3, stage: "PUBLISHED" },
  });

  const vm = toPromoVM(carouselSections[0]);

  console.log(vm.layout);

  return (
    <SectionLayout layout={vm.layout} heading={vm.layout?.sectionHeading}>
      <p>Stuff</p>
    </SectionLayout>
  );
}
