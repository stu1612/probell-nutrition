export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2
        className="relative inline-block text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight
            after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
      >
        Built on Strength, Backed by Purpose
      </h2>

      <ul className="mt-6 flex flex-wrap gap-3 text-sm">
        <li className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
          Clean ingredients
        </li>
        <li className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
          Transparent labels
        </li>
        <li className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
          Tested quality
        </li>
        <li className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
          Real results
        </li>
      </ul>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <p className="max-w-prose text-slate-700 leading-relaxed text-lg">
            Probell Nutrition was founded with a simple goal — to raise the
            standard of everyday performance. We started as athletes, not
            marketers, and that mindset shapes everything we do. Our focus is on
            creating clean, reliable supplements that help you build real
            progress — whether that means more energy in the gym, better
            recovery, or staying consistent day after day. We believe that
            results should come from hard work, not hype — and that every
            product should earn your trust through transparency and performance.
          </p>
        </div>

        <div className="grid col-span-1 md:col-span-2 md:grid-cols-2 auto-rows-fr gap-4">
          {/* Image 1 */}
          <div className="order-2 md:order-1">
            <div
              className="rounded-xl overflow-hidden bg-center bg-cover w-full aspect-[4/3]"
              aria-hidden="true"
              style={{
                backgroundImage: "url(/man-and-woman-doing-pushups.jpg)",
              }}
            />
          </div>

          {/* Card: Purpose */}
          <div className="order-1 md:order-2 rounded-xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Backed by Purpose
            </h3>
            <p className="text-slate-700">
              Our purpose is to make that journey clearer, simpler, and more
              effective through honest nutrition.
            </p>
          </div>

          {/* Card: Strength */}
          <div className="order-3 rounded-xl border border-slate-200 p-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Built on Strength
            </h3>
            <p className="text-slate-700">
              Strength isn’t just about lifting more — it’s about showing up
              every day and pushing your limits.
            </p>
          </div>

          {/* Image 2 */}
          <div className="order-4">
            <div
              className="rounded-xl overflow-hidden bg-center bg-cover w-full aspect-[4/3]"
              aria-hidden="true"
              style={{ backgroundImage: "url(/man-lifting-weights.jpg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
