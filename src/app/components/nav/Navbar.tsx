// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  // state
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-0 md:px-2 lg:px-0 ">
        {/* Top bar */}
        <div className="grid h-14 grid-cols-2 items-center md:h-16">
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
          <div className="hidden items-center justify-end gap-8 md:flex px-4">
            <Link
              href="/"
              className="text-blue-700 hover:text-blue-800 md:text-base"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-900 hover:text-blue-700 md:text-base"
            >
              Products
            </Link>
            <Link
              href="/products"
              className="text-gray-900 hover:text-blue-700 md:text-base"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-700 md:text-base"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="justify-self-end md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center bg-white rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Mobile menu panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            open ? "max-h-56" : "max-h-0"
          }`}
        >
          <div className="border-t border-gray-100 py-3">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-blue-700 hover:bg-gray-50"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
