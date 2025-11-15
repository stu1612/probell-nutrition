// next
import Image from "next/image";
import Link from "next/link";

// internal libs (api, queries, uitls, enums, types)
import { useNavStore } from "@/lib/stores/navStore";
import { NavigationProps } from "./types";

//npm
import clsx from "clsx";

// components
import HamburgerButton from "./HamburgerButton";

export default function DesktopNav({ links, pathname }: NavigationProps) {
  // stores
  const close = useNavStore((s) => s.close);

  return (
    <div className="grid h-auto grid-cols-2 items-center">
      <Link href="/" className="justify-self-start">
        <div
          className="relative h-16 w-24 md:h-18 md:w-28 aspect-square"
          onClick={close}
        >
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
            const active = l.href !== "/" && pathname?.startsWith(l.href);

            return (
              l.isDesktop && (
                <li key={l.id}>
                  <Link
                    href={l.href}
                    target={l.isExternal ? "_blank" : undefined}
                    rel={l.isExternal ? "noopener noreferrer" : undefined}
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
              )
            );
          })}
        </ul>
      </div>

      <div className="justify-self-end md:hidden">
        <HamburgerButton />
      </div>
    </div>
  );
}
