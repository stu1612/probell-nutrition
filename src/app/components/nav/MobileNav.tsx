// react
import Link from "next/link";

// internal libs (api, queries, uitls, enums, types)
import { useNavStore } from "@/lib/stores/navStore";
import { LinkTypeProps, NavigationProps } from "./types";

export default function MobileNav({ links }: NavigationProps) {
  // stores
  const open = useNavStore((s) => s.open);
  const toggle = useNavStore((s) => s.toggle);

  // properties
  const primaryLinks = links.filter((l) => l.type === "primary");
  const secondaryLinks = links.filter((l) => l.type === "secondary");

  // safeguard
  if (!open) return null;

  // jsx
  return (
    <div className="md:hidden border-t border-slate-700 bg-slate-800 p-4 rounded-2xl">
      <ul className="flex flex-col gap-3">
        <LinkType links={primaryLinks} />
        <li className="inline-block rounded-lg py-2 text-slate-300 text-sm font-black uppercase">
          Info
        </li>
        <LinkType links={secondaryLinks} />
      </ul>
    </div>
  );
}

const LinkType = ({ links }: LinkTypeProps) => {
  // stores
  const toggle = useNavStore((s) => s.toggle);

  return (
    <>
      {links.map((l) => {
        const Icon = l.icon;

        return (
          <li key={l.id}>
            <Link
              href={l.href}
              onClick={toggle}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-100 hover:bg-slate-700/70 hover:shadow-sm transition-all duration-150"
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{l.label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};
