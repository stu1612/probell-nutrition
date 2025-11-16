import Image from "next/image";
import { KETTLEBELL_CONTENT } from "@/app/constants/kettlebell";
import SectionLayout from "../sectionLayout/sectionLayout";
import Link from "next/link";

export default function Kettlebell() {
  return (
    // <div
    //   className="relative w-full h-full md:h-lvh bg-center bg-cover"
    //   style={{
    //     backgroundImage: "url(/kettlebell_swing.jpg)",
    //   }}
    // >
    //   {/* Overlay */}
    //   <div className="absolute inset-0 bg-slate-900/60 md:bg-slate-900/70" />

    //   {/* Gradient overlay */}
    //   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />

    //   <SectionLayout>
    //     <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(260px,380px)_1fr]">
    //       {/* Image */}
    //       <div className="justify-self-center md:justify-self-start">
    //         <Image
    //           src="/kettlebell-design.png"
    //           alt="Probell Kettlebell — Hardline Series"
    //           width={420}
    //           height={520}
    //           className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
    //           priority
    //         />
    //       </div>

    //       <div className="text-white">
    //         <div className="text-xl max-w-2xl space-y-4 leading-relaxed">
    //           {KETTLEBELL_CONTENT.excerpts.map((e, idx) => (
    //             <p key={idx}>{e}</p>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </SectionLayout>
    // </div>

    <div
      className="relative w-full bg-center bg-cover bg-no-repeat md:h-lvh"
      style={{
        backgroundImage: "url(/kettlebell_swing.jpg)",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-900/65 md:bg-slate-900/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/35" />

      <div className="relative z-10 space-y-10 md:space-y-12">
        <SectionLayout
          heading={KETTLEBELL_CONTENT.title}
          eyebrow={KETTLEBELL_CONTENT.eyebrow}
          className="text-slate-100"
        >
          {/* Layout */}
          <div className="grid gap-10 md:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] md:items-center md:min-h-[60vh]">
            {/* Image */}
            <div className="relative flex justify-center md:justify-start">
              {/* Gradient glow behind kettlebell */}
              <div
                className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr
                         from-red-500/35 via-sky-400/25 to-emerald-300/20 blur-3xl opacity-60 md:opacity-80"
                aria-hidden="true"
              />

              <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px] transition-transform duration-500 ease-out hover:-translate-y-1">
                <Image
                  src="/kettlebell-design.png"
                  alt="Probell Kettlebell — Hardline Series"
                  fill
                  className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.75)]"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="max-w-xl space-y-5 text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed">
              {KETTLEBELL_CONTENT.excerpts.map((e, idx) => (
                <p key={idx}>{e}</p>
              ))}
              <div className="pt-2">
                <Link
                  href="/the-kettlebell"
                  className="inline-flex items-center rounded-full border border-slate-200/80
                           bg-transparent px-5 py-2 text-sm font-medium text-slate-50
                           shadow-sm transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                >
                  Explore the Kettlebell
                </Link>
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
}
