import {
  Home,
  Dumbbell,
  Info,
  ShoppingBag,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";

type NavProps = {
  open: boolean;
  toggleHamburger: () => void;
};

export default function MobileNav({ open, toggleHamburger }: NavProps) {
  return (
    <div
      className={`md:hidden overflow-hidden  transition-[max-height] duration-300 ease-out ${
        open ? "h-auto" : "max-h-0"
      }`}
    >
      <div className="py-3">
        <ul className="flex flex-col gap-2 rounded-xl bg-slate-800/95 p-4 shadow-lg backdrop-blur-sm">
          {[
            {
              href: "/",
              label: "Home",
              icon: <Home className="w-4 h-4" />,
            },
            {
              href: "/products",
              label: "Products",
              icon: <ShoppingBag className="w-4 h-4" />,
            },
            {
              href: "/about",
              label: "About",
              icon: <Info className="w-4 h-4" />,
            },
            {
              href: "/contact",
              label: "Contact",
              icon: <Phone className="w-4 h-4" />,
            },
            {
              href: "/kettlebell",
              label: "The Kettlebell",
              icon: <Dumbbell className="w-4 h-4" />,
            },
            {
              href: "/legal",
              label: "Legal",
              icon: <ShieldCheck className="w-4 h-4" />,
            },
          ].map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => toggleHamburger()}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-white hover:bg-slate-700/70 hover:shadow-md transition-all duration-200"
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
