"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dumbbell, Clock, Flame, Heart } from "lucide-react"; // icons

export default function ProductDetailPage() {
  const router = useRouter();

  const product = {
    name: "Probell Whey Protein - Vanilla",
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
      { icon: Flame, text: "Enhances performance" },
      { icon: Clock, text: "Quick absorption" },
      { icon: Heart, text: "Supports overall wellness" },
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
    if (window.history.length > 1) router.back();
    else router.push("/products");
  };

  return (
    <section className="w-full  pb-24">
      {/* Back Button */}
      <div className="px-6 pt-10 lg:px-20">
        <button
          onClick={handleBack}
          className="flex items-center text-slate-700 hover:text-slate-900 transition"
        >
          <svg
            className="h-4 w-4 mr-2"
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
      </div>

      {/* Hero */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20 items-center">
        {/* Image column */}
        <div className="flex gap-4 items-start">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 mt-2">
            {product.images.map((img) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden ring-2 transition ${
                  selectedImage === img
                    ? "ring-red-600"
                    : "ring-transparent hover:ring-slate-300"
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

          {/* Main Image */}
          <div className="relative flex-1 bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm flex items-center justify-center">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        {/* Info column */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            {product.description}
          </p>

          {/* Quick specs */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-800">
            <span className="bg-slate-100 px-4 py-2 rounded-full ring-1 ring-slate-200">
              {product.packageSize}
            </span>
            <span className="bg-slate-100 px-4 py-2 rounded-full ring-1 ring-slate-200">
              {product.servings}
            </span>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="h-[1px] mt-20 bg-gradient-to-r from-red-600 to-sky-500 mx-6 lg:mx-20" />

      {/* Benefits */}
      <div className="mt-16 px-6 lg:px-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          What It’s Good For
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.benefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-xl ring-1 ring-slate-200 shadow-sm hover:shadow-md transition"
            >
              <b.icon className="h-8 w-8 text-red-600 mb-3" />
              <p className="text-center text-slate-700 text-sm font-medium">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* When to use */}
      <div className="mt-20 bg-gradient-to-r from-slate-100 to-slate-200 py-12 px-6 lg:px-20">
        <h2 className="text-xl font-bold text-slate-900 mb-3">When to Use</h2>
        <p className="max-w-3xl text-slate-700">{product.whenToUse}</p>
      </div>

      {/* Ingredients & Health Info */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-20">
        <div className="bg-white p-6 rounded-xl ring-1 ring-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Ingredients</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            {product.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl ring-1 ring-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-red-600 mb-3">
            Health Information
          </h2>
          <p className="text-slate-700">{product.healthInfo}</p>
          <p className="mt-3 text-sm text-slate-600 italic">
            {product.allergens}
          </p>
        </div>
      </div>
    </section>
  );
}
