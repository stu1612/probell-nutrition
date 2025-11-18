"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Clock, Flame, Heart } from "lucide-react";

export default function ProductDetailPage() {
  const router = useRouter();

  const product = {
    name: "Probell Whey Protein - Vanilla",
    category: "Recovery" as "Recovery" | "Performance",
    images: [
      "/whey_vanilla.png",
      "/whey_vanilla_docs_1.jpg",
      "/whey_vanilla_docs_2.jpg",
    ],
    description:
      "Probell Whey Protein is engineered for athletes who demand clean recovery and consistent performance. Fast-absorbing, high-quality protein that fuels your strength — without compromise.",
    whenToUse:
      "Consume post-workout or between meals to enhance recovery and support daily protein intake.",
    benefits: [
      { icon: Dumbbell, text: "Supports muscle recovery" },
      { icon: Flame, text: "Helps maintain training performance" },
      { icon: Clock, text: "Quick absorption post-workout" },
      { icon: Heart, text: "Supports overall wellness and consistency" },
    ],
    ingredients: [
      "Whey protein concentrate",
      "Whey protein isolate",
      "Natural vanilla flavor",
      "Lecithin (soy)",
      "Sucralose",
    ],
    packageSize: "1kg",
    servings: "33 servings",
    healthInfo:
      "Not recommended for individuals who are pregnant, nursing, or under 18 years of age. Consult your physician before use.",
    allergens:
      "Contains milk and soy (lecithin). Produced in a facility that also processes nuts.",
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/products");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-page background image with light overlay */}
      <div className="fixed inset-0 -z-10">
        <div
          className="h-full w-full bg-center bg-cover"
          style={{ backgroundImage: "url(/kettlebell_swing.jpg)" }}
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Fixed back button */}
      <button
        onClick={handleBack}
        className="fixed left-4 bottom-6 z-40 inline-flex items-center gap-2 rounded-full bg-slate-900/85 px-4 py-2 text-sm font-medium text-slate-100
                   ring-1 ring-slate-800 shadow-md backdrop-blur hover:bg-slate-800 hover:text-white transition-colors"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5H1m0 0L5 1M1 5l4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </button>

      {/* Main content */}
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-24 lg:px-8">
        {/* Header block: pill + title + subtitle */}
        <header className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {product.category && (
              <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800 ring-1 ring-slate-200">
                {product.category}
              </span>
            )}
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Probell Nutrition
            </span>
          </div>

          <h1 className="product-title font-extrabold tracking-tight text-slate-900">
            {product.name}
          </h1>
        </header>

        {/* Hero row: image + supporting content */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          {/* Image column */}
          <div>
            {/* Main image */}
            <div className="relative bg-white/95 rounded-2xl p-6 md:p-8 ring-1 ring-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.18)] flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={product.name}
                width={560}
                height={560}
                className="object-contain drop-shadow-[0_18px_40px_rgba(15,23,42,0.55)]"
              />
            </div>

            {/* Thumbnails below */}
            <div className="mt-5 flex justify-center gap-4 flex-wrap">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden ring-2 transition 
                    ${
                      selectedImage === img
                        ? "ring-gold"
                        : "ring-transparent hover:ring-slate-300/80"
                    }`}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right column: specs + B2B info */}
          <div className="text-slate-900 flex flex-col gap-6">
            {/* Description – bigger + more relaxed */}
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              {product.description}
            </p>

            {/* Quick specs */}
            <div className="flex flex-wrap gap-3 text-sm md:text-base font-semibold text-slate-900">
              <span className="bg-white px-4 py-2 rounded-full ring-1 ring-slate-200 shadow-sm">
                {product.packageSize}
              </span>
              <span className="bg-white px-4 py-2 rounded-full ring-1 ring-slate-200 shadow-sm">
                {product.servings}
              </span>
            </div>

            {/* B2B note */}
            <p className="text-sm md:text-base text-slate-600">
              This product is not sold directly online. For wholesale or
              partnership enquiries,{" "}
              <Link
                href="/contact"
                className="font-semibold text-slate-900 underline-offset-2 hover:underline"
              >
                contact Probell Nutrition
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] mt-16 bg-gradient-to-r from-red-600 to-sky-400 opacity-80" />

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            What It’s Good For
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white/95 p-6 rounded-xl ring-1 ring-slate-200 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <b.icon className="h-8 w-8 text-red-500 mb-3" />
                <p className="text-center text-slate-800 text-sm font-medium">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* When to use */}
        <div className="mt-16 rounded-2xl bg-white/95 px-6 py-8 md:px-8 md:py-10 ring-1 ring-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3">When to Use</h2>
          <p className="max-w-3xl text-slate-700 leading-relaxed">
            {product.whenToUse}
          </p>
        </div>

        {/* Ingredients & Health Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/95 p-6 rounded-xl ring-1 ring-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              {product.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/95 p-6 rounded-xl ring-1 ring-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-red-600 mb-3">
              Health Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {product.healthInfo}
            </p>
            <p className="mt-3 text-sm text-slate-600 italic">
              {product.allergens}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
