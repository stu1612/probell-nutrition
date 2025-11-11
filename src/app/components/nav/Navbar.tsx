"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  // state
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // properties
  const pathname = usePathname();

  // functions
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.3;
      setScrolled(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHamburger = () => {
    setOpen((v) => !v);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-in-out ${
        pathname === "/"
          ? scrolled
            ? "bg-slate-800/70 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          : "bg-slate-800/70 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-0 md:px-2 lg:px-0 ">
        <DesktopNav
          open={open}
          scrolled={scrolled}
          toggleHamburger={toggleHamburger}
        />
        <MobileNav open={open} toggleHamburger={toggleHamburger} />
      </div>
    </nav>
  );
}
