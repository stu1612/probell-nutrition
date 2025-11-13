import { CMS_NavItem, NavLink, NavVM } from "./types";
import { isNonEmpty } from "@/lib/helpers";

function buildHref(item: CMS_NavItem): { href: string; external: boolean } {
  // 1) page link: /{pageSlug}[#anchorId]
  if (item.type === "page" && isNonEmpty(item.pageSlug)) {
    const base = `/${item.pageSlug!.replace(/^\/+/, "")}`;
    const hash = isNonEmpty(item.anchorId) ? `#${item.anchorId}` : "";
    return { href: `${base}${hash}`, external: false };
  }

  // 2) anchor-only link: /#anchorId (for sections on home)
  if (item.type === "anchor" && isNonEmpty(item.anchorId)) {
    // if it has a pageSlug, it's an anchor ON that page
    if (isNonEmpty(item.pageSlug)) {
      const base = `/${item.pageSlug!.replace(/^\/+/, "")}`;
      return { href: `${base}#${item.anchorId}`, external: false };
    }

    // otherwise, treat it as an anchor on the home page
    return { href: `/#${item.anchorId}`, external: false };
  }

  // 3) fallback: home
  return { href: "/", external: false };
}

export function toNavLink(item: CMS_NavItem): NavLink {
  const { href, external } = buildHref(item);

  let loc: NavLink["location"] = "other";
  if (item.location === "primary") loc = "primary";
  if (item.location === "secondary") loc = "secondary";

  return {
    id: item.id,
    label: item.label, // non-null in schema
    href,
    external,
    location: loc,
  };
}

export function toNavVM(items?: CMS_NavItem[] | null): NavVM {
  const arr = Array.isArray(items) ? items : [];
  const all = arr.map(toNavLink);
  const primary = all.filter((l) => l.location === "primary");
  const secondary = all.filter((l) => l.location === "secondary");
  return { primary, secondary, all };
}
