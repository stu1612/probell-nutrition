// react
import Link from "next/link";
import Image from "next/image";

// internal libs (api, queries, uitls, enums, types)
import { FooterSectionProps } from "./types";
import {
  FOOTER_RESOURCES,
  FOOTER_FOLLOW_US,
  FOOTER_LEGAL,
} from "@/app/constants/footer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-800">
      <div className="mx-auto w-full max-w-6xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Probell Nutrition"
                width={132}
                height={132}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            <FooterSection title="Resources" links={FOOTER_RESOURCES} />
            <FooterSection title="Follow Us" links={FOOTER_FOLLOW_US} />
            <FooterSection title="Legal" links={FOOTER_LEGAL} />
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <span className="text-sm text-slate-400 sm:text-center">
            © {year}{" "}
            <Link href="/" className="hover:underline">
              Probell Nutrition
            </Link>
            . All rights reserved.
          </span>

          {/* Socials */}
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <p className="text-slate-400 text-sm">info@probellnutrition.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div className="text-center md:text-left">
      <h2 className="mb-6 text-sm font-semibold uppercase text-slate-300 ">
        {title}
      </h2>

      <ul className="font-medium text-slate-500">
        {links.map((l) => (
          <li key={l.href} className="mb-4">
            {l.isExternal ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400"
              >
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className="hover:text-slate-400">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
