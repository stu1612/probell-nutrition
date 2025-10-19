// internal libs (api, queries, uitls, enums, types)
import { SectionBase } from "@/types/components";
import { spacingToClass } from "./helpers";

type LayoutProps = {
  children: React.ReactNode;
  layout: SectionBase | null | undefined;
  className?: string;
  container?: boolean;
};

export default function SectionLayout({
  children,
  layout,
  className,
  container = true,
}: LayoutProps) {
  if (layout && layout.isVisible === false) return null;

  const pt = spacingToClass(layout?.paddingTop, "t");
  const pb = spacingToClass(layout?.paddingBottom, "b");
  const id = layout?.anchorId ?? undefined;
  const aria = layout?.internalLabel ?? layout?.sectionHeading ?? undefined;

  const inner = (
    <div className={["w-full", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
  return (
    <section id={id} aria-label={aria} className={[pt, pb].join(" ")}>
      {container ? (
        <div className="mx-auto max-w-6xl px-6">{inner}</div>
      ) : (
        inner
      )}
    </section>
  );
}
