// components
import AppLink from "@/app/components/globals/appLink";
import Link from "next/link";

const legalLinks = [
  {
    href: "/legal/terms-and-conditions",
    label: "Terms & Conditions",
    description:
      "Rules for using the Probell Nutrition website as a B2B visitor.",
  },
  {
    href: "/legal/privacy-policy",
    label: "Privacy Policy",
    description: "How we handle contact information and basic analytics data.",
  },
  {
    href: "/legal/shipping-and-delivery",
    label: "Shipping & Delivery",
    description:
      "How shipping, lead times, and logistics are handled for B2B orders.",
  },
  {
    href: "/legal/refunds-and-returns",
    label: "Refunds & Returns",
    description:
      "Expectations and process for wholesale order issues and defects.",
  },
];

export default function LegalIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Legal Information
        </h1>
        <p className="text-sm md:text-base text-slate-700">
          For transparency and clarity, you can review all terms that apply to
          using this website and working with Probell Nutrition as a business
          partner.
        </p>
      </header>

      <ul className="space-y-4">
        {legalLinks.map((item) => (
          <li
            key={item.href}
            className="rounded-xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm"
          >
            <Link
              href={item.href}
              className="text-base font-semibold text-slate-900"
            >
              {item.label}
            </Link>
            <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
