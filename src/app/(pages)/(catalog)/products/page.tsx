"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: "Performance" | "Recovery" | "Health";
};

const PRODUCTS: Product[] = [
  {
    title: "Probell Whey Chocolate",
    slug: "",
    excerpt: "Fast-digesting whey for clean recovery and lean strength.",
    image: "/whey_chocolate.png",
    category: "Recovery",
  },
  {
    title: "Probell Whey Strawberry",
    slug: "creatine-monohydrate",
    excerpt: "Pure strength, simple formula. Power every rep.",
    image: "/whey_strawberry.png",
    category: "Performance",
  },
  {
    title: "Probell Whey Vanilla",
    slug: "bcaa-essentials",
    excerpt: "Amino support for endurance, focus, and recovery.",
    image: "/whey_vanilla.png",
    category: "Recovery",
  },
  {
    title: "Probell Creatine Caribbean",
    slug: "pre-workout-ignite",
    excerpt: "Clean energy and focus. No crash — just lift.",
    image: "/creatine_caribbean.png",
    category: "Performance",
  },
  {
    title: "Probell Creatine Ice",
    slug: "hard-gainer-blend",
    excerpt: "Balanced carbs + protein for real mass, not bloat.",
    image: "/creatine_ice.png",
    category: "Performance",
  },
  {
    title: "Probell Creatine Cola",
    slug: "electrolyte-hydration",
    excerpt: "Hydrate smarter for longer, stronger sessions.",
    image: "/creatine_cola.png",
    category: "Recovery",
  },
  {
    title: "Probell Gainer",
    slug: "joint-support",
    excerpt: "Move well. Train longer. Support your foundation.",
    image: "/gainer.png",
    category: "Health",
  },
  {
    title: "Probell PWO",
    slug: "daily-multivitamin",
    excerpt: "Core vitamins and minerals for everyday performance.",
    image: "/pwo_display.png",
    category: "Health",
  },
  {
    title: "Probell Collagen",
    slug: "omega-3",
    excerpt: "High-quality omegas for heart, brain, and recovery.",
    image: "/collagen.png",
    category: "Health",
  },
];

const TABS = ["All", "Performance", "Recovery", "Health"] as const;
type Tab = (typeof TABS)[number];

export default function ProductsPage() {
  const [active, setActive] = useState<Tab>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <section className="w-full ">
      {/* Title */}
      <div className="px-4 md:px-10 lg:px-20 pt-16 md:pt-24">
        <header className="text-center">
          <h1
            className="relative inline-block text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900
            after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
          >
            Fuel Your Training
          </h1>
          <p className="mx-auto mt-4  text-slate-600 leading-relaxed">
            Clean formulas. Clear purpose. Explore our range built to power your
            performance.
          </p>
        </header>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-slate-50/90 backdrop-blur supports-[backdrop-filter]:bg-slate-50/70">
        <div className="px-4 md:px-10 lg:px-20">
          <div className="mx-auto border-t border-b border-slate-200 py-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {TABS.map((tab) => {
                const isActive = tab === active;
                return (
                  <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`relative rounded-full px-5 py-2 text-sm font-semibold transition
                      ${
                        isActive
                          ? "text-slate-900 bg-white ring-1 ring-slate-200 shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                      }
                    `}
                    aria-pressed={isActive}
                  >
                    {tab}
                    {isActive && (
                      <span className="pointer-events-none absolute inset-x-3 -bottom-[6px] h-[3px] rounded-full bg-gradient-to-r from-red-600 to-sky-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 md:px-10 lg:px-20 pb-20">
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center">
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/product`}
              className="group relative flex w-full max-w-[340px] flex-col rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-slate-300"
            >
              {/* Uniform image area */}
              <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-slate-50">
                {/* Add inner padding so mixed packshots feel same size */}
                <div className="absolute inset-0 p-6 md:p-8">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 to-sky-500 opacity-80" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h2 className="text-lg md:text-xl font-extrabold tracking-wide text-slate-900">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  View product
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 14 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <span className="absolute right-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200">
                {p.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
