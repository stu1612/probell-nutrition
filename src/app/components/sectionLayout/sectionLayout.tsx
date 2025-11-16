// npm
import clsx from "clsx";

type SectionLayoutProps = {
  id?: string;
  heading?: string | null;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
};

export default function SectionLayout({
  id,
  heading,
  eyebrow,
  className,
  children,
}: SectionLayoutProps) {
  return (
    // <section
    //   id={id}
    //   className={clsx("mx-auto max-w-6xl px-6 py-16 md:py-24", className)}
    // >
    //   {heading && (
    //     <h2
    //       className="relative inline-block text-2xl text-slate-800 tracking-tight
    //                  after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full
    //                   after:bg-gradient-to-r after:from-red-600 after:to-sky-500"
    //     >
    //       {heading}
    //     </h2>
    //   )}

    //   {children}
    // </section>

    <section
      id={id}
      className={clsx("mx-auto max-w-6xl px-6 py-16 md:py-24", className)}
    >
      {(heading || eyebrow) && (
        <header className="mb-8 space-y-3">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              {eyebrow}
            </p>
          )}

          {heading && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              {heading}
            </h2>
          )}
          <span className="inline-block h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-sky-400" />
        </header>
      )}

      {children}
    </section>
  );
}
