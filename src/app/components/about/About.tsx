import { ABOUT_CONTENT } from "@/app/constants/about";
import clsx from "clsx";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="about-us">
      <h2
        className="relative inline-block text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight
            after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
      >
        {ABOUT_CONTENT.title}
      </h2>

      <ul className="mt-6 flex flex-wrap gap-3 text-sm">
        {ABOUT_CONTENT.pills.map((p, idx) => (
          <li
            className="rounded-full border border-slate-200 px-3 py-1 text-slate-600"
            key={idx}
          >
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <p className="max-w-prose text-slate-700 leading-relaxed text-lg">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        <div className="grid col-span-1 md:col-span-2 md:grid-cols-2 auto-rows-fr gap-4">
          {/* Card: Purpose */}
          <CardImage
            className="order-2 md:order-1"
            url="/man-and-woman-doing-pushups.jpg"
          />

          <CardText
            title={ABOUT_CONTENT.card1.title}
            excerpt={ABOUT_CONTENT.card1.excerpt}
            className="order-1 md:order-2"
          />

          {/* Card: Strength */}
          <CardText
            title={ABOUT_CONTENT.card2.title}
            excerpt={ABOUT_CONTENT.card2.excerpt}
            className="order-3"
          />
          <CardImage className="order-4" url="/man-lifting-weights.jpg" />
        </div>
      </div>
    </section>
  );
}

const CardText = ({
  title,
  excerpt,
  className,
}: {
  title: string;
  excerpt: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(`${className} rounded-xl border border-slate-200 p-4`)}
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-700">{excerpt}</p>
    </div>
  );
};

const CardImage = ({ className, url }: { className?: string; url: string }) => {
  return (
    <div className={clsx(className)}>
      <div
        className="rounded-xl overflow-hidden bg-center bg-cover w-full aspect-[4/3]"
        aria-hidden="true"
        style={{ backgroundImage: `url(${url})` }}
      />
    </div>
  );
};
