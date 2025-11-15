import Image from "next/image";
import { KETTLEBELL_CONTENT } from "@/app/constants/kettlebell";

export default function Kettlebell() {
  return (
    <section
      className="relative w-full h-full md:h-lvh bg-center bg-cover"
      style={{
        backgroundImage: "url(/kettlebell_swing.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 md:bg-slate-900/70" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          className="relative inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-white
            after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full
            after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
        >
          {KETTLEBELL_CONTENT.title}
        </h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(260px,380px)_1fr]">
          {/* Image */}
          <div className="justify-self-center md:justify-self-start">
            <Image
              src="/kettlebell-design.png"
              alt="Probell Kettlebell — Hardline Series"
              width={420}
              height={520}
              className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>

          <div className="text-white">
            <div className="text-xl max-w-2xl space-y-4 leading-relaxed">
              {KETTLEBELL_CONTENT.excerpts.map((e, idx) => (
                <p key={idx}>{e}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
