// components
import { ABOUT_CONTENT } from "@/app/constants/about";
import SectionLayout from "../sectionLayout/sectionLayout";

// npm
import clsx from "clsx";

export default function About() {
  return (
    <SectionLayout
      id="about-us"
      heading={ABOUT_CONTENT.title}
      eyebrow={ABOUT_CONTENT.eyebrow}
    >
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

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
        <div>
          <p className="max-w-prose text-slate-700 leading-relaxed text-base md:text-lg">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        <div className="grid col-span-1 md:col-span-2 md:grid-cols-2 gap-4">
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
    </SectionLayout>
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
      className={clsx(
        `${className} rounded-xl bg-white border border-slate-100 p-4 md:p-5 shadow-sm transition-shadow duration-200 hover:shadow-md`
      )}
    >
      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        {excerpt}
      </p>
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
