// app/(catalog)/navbar/navbar.client.tsx  (Client Component)
"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { NavVM } from "./types";

type NavClientProps = {
  vm: NavVM;
};

export default function NavbarClient({ vm }: NavClientProps) {
  // properties
  const pathname = usePathname();

  // state
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const wrapperClasses = clsx(
    "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-in-out",
    pathname === "/"
      ? scrolled
        ? "bg-slate-800/70 backdrop-blur-md shadow-sm"
        : "bg-transparent"
      : "bg-slate-800/70 backdrop-blur-md shadow-sm"
  );

  const toggleHamburger = () => setOpen((v) => !v);

  return (
    <nav className={wrapperClasses}>
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-0 md:px-2 lg:px-0">
        <DesktopNav
          links={vm.primary}
          open={open}
          scrolled={scrolled}
          toggleHamburger={toggleHamburger}
          pathname={pathname ?? "/"}
        />
        <MobileNav
          primary={vm.primary}
          secondary={vm.secondary}
          open={open}
          toggleHamburger={toggleHamburger}
          pathname={pathname ?? "/"}
        />
      </div>
    </nav>
  );
}
