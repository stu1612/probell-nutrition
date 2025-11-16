// next
import Image from "next/image";

// internal libs (api, queries, uitls, enums, types)
import { hygraph } from "@/lib/hygraph";
import { PROMO_PRODUCTS } from "@/lib/queries";
import { PromoBlock } from "./types";
import { toPromoVM } from "./mappers";

// components
import SectionLayout from "../sectionLayout/sectionLayout";
import Link from "next/link";

export default async function PromoProducts() {
  const { carouselSections } = await hygraph<PromoBlock>({
    query: PROMO_PRODUCTS,
    variables: { limit: 3, stage: "PUBLISHED" },
  });

  const vm = toPromoVM(carouselSections[0]);

  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-gray-200 bg-blend-overlay bg-cover px-6 py-16 md:p-24"
      style={{ backgroundImage: "url(/promo-product-wallpaper.jpg)" }}
    >
      <SectionLayout
        heading={vm.layout?.sectionHeading}
        eyebrow="Probell Nutrition"
      >
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {vm.items.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl bg-gray-50 p-4 shadow-sm transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg"
            >
              <Link
                href={item.slug ? `/product/${item.slug}` : "/products"}
                className="block"
              >
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={item.image.url}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-center text-slate-900">
                  {item.title ?? "Probell Product"}
                </h3>

                {item.excerpt && (
                  <p className="mt-2 text-sm text-gray-600 text-center leading-snug">
                    {item.excerpt}
                  </p>
                )}
              </Link>
              {/* Mobile-only CTA */}
              <div className="mt-8 flex justify-center md:hidden">
                <Link
                  href={item.slug ? `/product/${item.slug}` : "/products"}
                  className="inline-flex items-center rounded-full border border-slate-300
                         bg-white/90 px-5 py-2 text-sm font-medium text-slate-900
                         shadow-sm transition-colors duration-200 hover:bg-slate-900 hover:text-white"
                >
                  See more
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border border-slate-300
                         bg-gold px-5 py-2 text-sm font-medium text-slate-900
                         shadow-sm transition-colors duration-200 hover:bg-slate-900 hover:text-white"
          >
            View all products
          </Link>
        </div>
      </SectionLayout>
    </div>
  );
}
