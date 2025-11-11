// next
// import Image from "next/image";

// libs
import { hygraph } from "@/lib/hygraph";

// internal libs (api, queries, uitls, enums, types)
import { HERO_BLOCK } from "@/lib/queries";
import type { HeroBlockResult } from "./types";
import { toHeroVM } from "./mappers";
// import { MediaTypeEnum } from "@/types/enums";

// components
import AppLink from "../globals/appLink";

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
    <section
      className="h-svh md:h-lvh bg-center bg-no-repeat bg-slate-500 bg-blend-multiply bg-cover relative"
      style={{
        backgroundImage: `url(${vm.primary.url})`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-24 text-center flex flex-col justify-center lg:py-56 absolute inset-0">
        <h1 className="mb-4 font-black leading-[1] tracking-tight text-white ">
          {vm.title}
        </h1>
        {vm.description && (
          <p className="mb-8 font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-3xl">
            {vm.description}
          </p>
        )}

        <div className="flex flex-col pt-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          {vm.cta?.label && <AppLink cta={vm.cta} />}
        </div>
      </div>
    </section>
  );
}
