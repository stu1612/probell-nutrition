"use client";

// react
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// internal libs (api, queries, uitls, enums, types)
import { useNavStore } from "@/lib/stores/navStore";
import { NAV_LINKS } from "@/app/constants/navigation";
import { toNavVM } from "./mappers";

// npm
import clsx from "clsx";

// components
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavbarClient() {
  // properties
  const pathname = usePathname();
  const vm = toNavVM(NAV_LINKS);

  // stores
  const { scrolled, setScrolled } = useNavStore();

  // voids
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.3;
      setScrolled(window.scrollY > trigger);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // properties
  const wrapperClasses = clsx(
    "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-in-out",
    pathname === "/"
      ? scrolled
        ? "bg-slate-800/70 backdrop-blur-md shadow-sm"
        : "bg-transparent"
      : "bg-slate-800/70 backdrop-blur-md shadow-sm"
  );

  return (
    <nav className={wrapperClasses}>
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-0 md:px-2 lg:px-0">
        <DesktopNav links={vm} pathname={pathname ?? "/"} />
        <MobileNav links={vm} pathname={pathname ?? "/"} />
      </div>
    </nav>
  );
}
