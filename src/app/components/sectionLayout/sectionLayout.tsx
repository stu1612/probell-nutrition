// internal libs (api, queries, uitls, enums, types)
import { SectionBase } from "@/types/components";
import { spacingToClass } from "./helpers";

import clsx from "clsx";
import { isNonEmpty } from "../hero/helpers";

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
      <h2 className="text-2xl font-semibold">{sectionHeading}</h2>
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
