// internal libs (api, queries, uitls, enums, types)
import { HERO_BLOCK } from "@/lib/queries";
import type { HeroBlockResult } from "./types";
import { toHeroVM } from "./mappers";
import { hygraph } from "@/lib/hygraph";

// components
// import AppLink from "../globals/appLink";
import Link from "next/link";

export default async function Hero() {
  const { heroes } = await hygraph<HeroBlockResult>({
    query: HERO_BLOCK,
    variables: { stage: "PUBLISHED" },
  });

  // properties
  const hero = heroes?.[0];
  // const layout = hero?.layout;

  if (!hero || !hero.display) return null;

  const vm = toHeroVM(hero.display);

  return (
    <section className="relative h-svh md:h-lvh overflow-hidden">
      {/* Background image layer (only this zooms) */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-slate-500 bg-blend-multiply bg-cover animate-heroZoom"
        style={{
          backgroundImage: `url(${vm.primary.url})`,
        }}
      />

      {/* Optional extra dark overlay if needed */}
      <div className="absolute inset-0 bg-slate-900/30 md:bg-slate-900/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center z-10 max-w-3xl mx-auto text-center px-6 md:px-0">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200/80 mb-4">
          Performance Nutrition Made Clear
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          {vm.title}
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-200 drop-shadow-md">
          {vm.description}
        </p>

        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border border-gold
               bg-transparent px-6 py-2 text-sm font-medium text-slate-100
               shadow-sm transition-colors duration-200 hover:bg-gold hover:text-"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
