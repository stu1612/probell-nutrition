// next
import Image from "next/image";

// libs
import { hygraph } from "@/lib/hygraph";

// internal libs (api, queries, uitls, enums, types)
import { HERO_BLOCK } from "@/lib/queries";
import type { HeroBlockResult } from "./types";
import { toHeroVM } from "./mappers";
import { MediaTypeEnum } from "@/types/enums";

// components
import AppLink from "../globals/appLink";
import SectionLayout from "../sectionLayout/sectionLayout";

export default async function Hero() {
  const { heroes } = await hygraph<HeroBlockResult>({
    query: HERO_BLOCK,
    variables: { stage: "PUBLISHED" },
  });

  const hero = heroes?.[0];
  const layout = hero?.layout;

  if (!hero || !hero.display) return null;

  const vm = toHeroVM(hero.display);

  return (
    <SectionLayout layout={layout}>
      <div className="grid items-center gap-8 md:grid-cols-2 lg:block relative">
        <div className="space-y-4 lg:absolute right-3 flex text-left justify-center flex-col h-full lg:items-end">
          {vm.subtitle && (
            <p className="text-sm uppercase tracking-wide text-gray-500">
              {vm.subtitle}
            </p>
          )}
          {vm.title && (
            <h1 className="text-3xl md:text-5xl font-bold lg:w-[50%] lg:text-right">
              {vm.title}
            </h1>
          )}
          {vm.description && (
            <p className="text-base md:text-lg text-gray-600 text-left lg:w-[50%] lg:text-right">
              {vm.description}
            </p>
          )}
          <div>{vm.cta?.label && <AppLink cta={vm.cta} />}</div>
        </div>
        <div>
          {vm.mediaType === MediaTypeEnum.IMAGE && vm.primary.url && (
            <Image
              src={vm.primary.url}
              alt={vm.primary.alt}
              width={vm.primary.width}
              height={vm.primary.height}
              className="rounded-2xl "
              priority
            />
          )}
          {vm.mediaType === MediaTypeEnum.VIDEO && vm.primary.url && (
            <video
              className={`w-full rounded-2xl ${
                vm.decorations.primary ? "ring-1 ring-gray-200" : ""
              }`}
              controls
            >
              <source src={vm.primary.url} />
            </video>
          )}
          {/* {vm.secondary?.url && (
            <div className="absolute left-0 bottom-2 w-1/3" aria-hidden="true">
              <Image
                src={vm.secondary.url}
                alt={vm.secondary.alt}
                width={vm.secondary.width}
                height={vm.secondary.height}
              />
            </div>
          )} */}
        </div>
      </div>
    </SectionLayout>
  );
}
