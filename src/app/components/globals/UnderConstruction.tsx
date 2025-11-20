// app/(pages)/under-construction/page.tsx
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Probell Nutrition
        </p>

        <h1
          className="relative mt-3 inline-block text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900
                     after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full
                     after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
        >
          This page is under construction
        </h1>

        <p className="mt-5 w-full mx-auto text-slate-600 leading-relaxed flex justify-center">
          We&apos;re still working on this part of the site. The essentials are
          ready – products and product detail – and we&apos;ll be adding more
          shortly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border border-slate-300
                       bg-white/90 px-6 py-2 text-sm font-medium text-slate-900
                       shadow-sm transition-colors duration-200 hover:bg-slate-900 hover:text-white"
          >
            Go to products
          </Link>

          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-slate-300
                       bg-transparent px-6 py-2 text-sm font-medium text-slate-900
                       shadow-sm transition-colors duration-200 hover:bg-slate-900 hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
