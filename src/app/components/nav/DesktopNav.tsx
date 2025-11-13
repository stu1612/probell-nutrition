import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./types";
import clsx from "clsx";

type DesktopNavProps = {
  links: NavLink[];
  open: boolean;
  scrolled: boolean;
  toggleHamburger: () => void;
  pathname: string;
};

export default function DesktopNav({
  links,
  open,
  scrolled,
  toggleHamburger,
  pathname,
}: DesktopNavProps) {
  console.log("links ", links);
  return (
    <div className="grid h-auto grid-cols-2 items-center">
      <Link href="/" className="justify-self-start">
        <div className="relative h-16 w-24 md:h-18 md:w-28 aspect-square">
          <Image
            src="/logo.jpg"
            alt="Probell Nutrition"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <div className="hidden items-center justify-end gap-8 md:flex px-4 mix-blend-difference text-white font-medium">
        <ul className="flex items-center gap-6">
          {links?.map((l) => {
            const active =
              !l.external && l.href !== "/" && pathname.startsWith(l.href);

            return (
              <li key={l.id}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className={clsx(
                    "relative text-medium font-medium text-slate-200 hover:text-white transition-colors",
                    active && "text-white"
                  )}
                >
                  {l.label}
                  <span
                    className={clsx(
                      "absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-red-300 to-sky-400 origin-left transition-transform",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="justify-self-end md:hidden">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => toggleHamburger()}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 focus:outline-none  ${
            pathname === "/"
              ? scrolled
                ? "bg-slate-700 text-white hover:bg-slate-600"
                : "bg-white/20 text-white hover:bg-white/30"
              : "bg-slate-700 text-white hover:bg-slate-600"
          }`}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
