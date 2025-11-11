// internal libs (api, queries, uitls, enums, types)
import { spacingToClass } from "./helpers";
import { isNonEmpty } from "../hero/helpers";

// components
import { SectionBase } from "@/types/components";

// npm
import clsx from "clsx";

type LayoutProps = {
  children: React.ReactNode;
  layout: SectionBase | null | undefined;
  className?: string;
  container?: boolean;
  heading?: string | null;
};

export default function SectionLayout({
  children,
  layout,
  className,
  container = true,
  heading,
}: LayoutProps) {
  if (layout && layout.isVisible === false) return null;

  const pt = spacingToClass(layout?.paddingTop, "t");
  const pb = spacingToClass(layout?.paddingBottom, "b");

  const sectionClasses = clsx(pt, pb);
  const wrapperClasses = clsx("w-full", className);
  const id = layout?.anchorId ?? undefined;
  const aria = layout?.internalLabel ?? layout?.sectionHeading ?? undefined;
  const sectionHeading = isNonEmpty(heading) ? heading : null;

  const content = (
    <div className={wrapperClasses}>
      <h2
        className="relative inline-block text-2xl text-slate-800 tracking-tight
             after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full
             after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
      >
        {sectionHeading}
      </h2>
      {children}
    </div>
  );
  return (
    <section id={id} aria-label={aria} className={sectionClasses}>
      {container ? (
        <div className="mx-auto max-w-6xl px-6">{content}</div>
      ) : (
        content
      )}
    </section>
  );
}
