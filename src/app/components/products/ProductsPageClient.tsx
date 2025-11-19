"use client";

import Image from "next/image";

import type { ProductVM } from "@/app/(pages)/(catalog)/products/types";
import Link from "next/link";

type Props = {
  products: ProductVM[];
};

export default function ProductsPageClient({ products }: Props) {
  return (
    <section className="w-full">
      {/* Title */}
      <div className="px-4 md:px-10 lg:px-20 pt-16 md:pt-24">
        <header className="text-center">
          <h1
            className="relative inline-block text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900
          after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
          >
            Fuel Your Training
          </h1>
          <p className="mx-auto mt-4 text-slate-600 leading-relaxed">
            Clean formulas. Clear purpose. Explore our range built to power your
            performance.
          </p>
        </header>
      </div>

      {/* Grid */}
      <div className="px-4 md:px-10 lg:px-20 pb-20">
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/product/${p.slug}`}
              className="group relative flex w-full max-w-[340px] flex-col rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm
                       transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-300"
            >
              <div className="relative h-64 md:h-72 flex items-center justify-center overflow-hidden rounded-t-2xl bg-slate-100">
                <Image
                  src={p.image.url}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                />
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

              {/* Category Badge */}
              {p.category && (
                <span className="absolute right-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200">
                  {p.category}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
