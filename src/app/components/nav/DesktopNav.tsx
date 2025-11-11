import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

type NavProps = {
  open: boolean;
  scrolled: boolean;
  toggleHamburger: () => void;
};

export default function DesktopNav({
  open,
  scrolled,
  toggleHamburger,
}: NavProps) {
  // properties
  const pathname = usePathname();

  return (
    <div className="grid h-auto grid-cols-2 items-center">
      {/* Logo */}
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

      {/* Center: Desktop nav */}
      <div className="hidden items-center justify-end gap-8 md:flex px-4 mix-blend-difference text-white font-medium">
        {["Home", "Products", "About", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="transition-colors duration-300 hover:text-red-400"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
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
          {/* Icon */}
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
