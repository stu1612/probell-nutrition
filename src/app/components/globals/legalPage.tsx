// src/components/legal/LegalPage.tsx
type LegalSection = {
  heading: string;
  body: string;
};

type LegalContent = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-10">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: {content.updated}
        </p>
      </header>

      {content.sections.map((section, idx) => (
        <section key={idx} className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">
            {section.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-700">
            {section.body}
          </p>
        </section>
      ))}
    </main>
  );
}
