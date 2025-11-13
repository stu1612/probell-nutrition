"use client";

import { useNavStore } from "@/lib/stores/navStore";
import { usePathname } from "next/navigation";

export default function HamburgerButton() {
  const toggle = useNavStore((s) => s.toggle);
  const open = useNavStore((s) => s.open);
  const scrolled = useNavStore();

  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={toggle}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 focus:outline-none  ${
        isHome
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
  );
}
