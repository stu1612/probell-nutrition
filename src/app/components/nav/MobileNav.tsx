import { Home, Weight, Info, ShoppingBag, Phone } from "lucide-react";

import { useNavStore } from "@/lib/stores/navStore";
import Link from "next/link";
import { NavLink } from "./types";
import { JSX } from "react";

type MobileNavProps = {
  primary: NavLink[];
  secondary: NavLink[];
  pathname: string;
};

export default function MobileNav({ primary, secondary }: MobileNavProps) {
  const open = useNavStore((s) => s.open);
  const toggle = useNavStore((s) => s.toggle);

  if (!open) return null;

  // properties
  const iconMap: Record<string, JSX.Element> = {
    Home: <Home className="w-4 h-4" />,
    Products: <ShoppingBag className="w-4 h-4" />,
    About: <Info className="w-4 h-4" />,
    Kettlebell: <Weight className="w-4 h-4" />,
    Contact: <Phone className="w-4 h-4" />,
  };

  const primaryLinks = primary.map((l) => {
    const icon = iconMap[l.label] ?? null;

    return (
      <li key={l.id}>
        <Link
          href={l.href}
          onClick={toggle}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-100 hover:bg-slate-700/70 hover:shadow-sm transition-all duration-150"
        >
          {icon}
          <span>{l.label}</span>
        </Link>
      </li>
    );
  });

  const secondaryLinks = secondary.length > 0 && (
    <>
      <li className="inline-block rounded-lg py-2 text-slate-300 text-sm font-black uppercase">
        Info
      </li>
      {secondary.map((l) => (
        <li key={l.id}>
          <Link
            href={l.href}
            onClick={toggle}
            className="block py-1 text-slate-300"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </>
  );

  // safeguard
  if (!open) return null;

  // jsx
  return (
    <div className="md:hidden border-t border-slate-700 bg-slate-800 p-4 rounded-2xl">
      <ul className="flex flex-col gap-3">
        {primaryLinks}

        {secondaryLinks}
      </ul>
    </div>
  );
}
