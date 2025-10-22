// next
import Image from "next/image";

// internal libs (api, queries, uitls, enums, types)
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

  return (
    <SectionLayout layout={vm.layout} heading={vm.layout?.sectionHeading}>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {vm.items.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl p-4 shadow-sm ring-1 ring-black/5"
          >
            <a
              href={item.slug ? `/product/${item.slug}` : "#"}
              className="block"
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  src={item.image.url}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3>{item.title ?? "Untitled Product"}</h3>
                {item.excerpt && (
                  <p className="text-muted-foreground">{item.excerpt}</p>
                )}
              </div>
            </a>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}
