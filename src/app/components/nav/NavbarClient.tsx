"use client";

// react
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// internal libs (api, queries, uitls, enums, types)
import { NavVM } from "./types";
import { useNavStore } from "@/lib/stores/navStore";

// npm
import clsx from "clsx";

// compoenents
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

type NavClientProps = {
  vm: NavVM;
};

export default function NavbarClient({ vm }: NavClientProps) {
  // properties
  const pathname = usePathname();

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
        <DesktopNav links={vm.primary} pathname={pathname ?? "/"} />
        <MobileNav
          primary={vm.primary}
          secondary={vm.secondary}
          pathname={pathname ?? "/"}
        />
      </div>
    </nav>
  );
}
