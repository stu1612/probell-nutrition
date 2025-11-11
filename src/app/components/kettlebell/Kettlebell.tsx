import Image from "next/image";

export default function Kettlebell() {
  return (
    <section
      className="relative w-full h-full md:h-lvh bg-center bg-cover"
      style={{
        backgroundImage:
          "url(/man-in-background-with-kettlebell-on-display.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 md:bg-slate-900/50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          className="relative inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-white
            after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full
            after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
        >
          Where Strength Meets Design
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
              <p>
                Introducing the new Probell Kettlebell — where balance meets
                power, and design drives performance. Built to push limits, one
                rep at a time.
              </p>
              <p>
                Every curve and contour is engineered for confident grip and
                perfect balance through swings, presses, and pulls. Constructed
                from high-grade materials, it stands up to the toughest training
                — day after day.
              </p>
              <p>
                Whether you’re building strength, endurance, or consistency, the
                Probell Kettlebell unites design and power in one tool. Because
                real progress deserves equipment made with intention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
