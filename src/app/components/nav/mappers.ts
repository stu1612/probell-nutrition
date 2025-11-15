import type { ComponentType } from "react";

type NavLinkType = "primary" | "secondary";

export function toNavVM(
  links: {
    id: string;
    label: string;
    href: string;
    isDesktop: boolean;
    isExternal: boolean;
    type: NavLinkType;
    icon?: ComponentType<{ className?: string }>;
  }[]
) {
  return links.map((l) => ({
    id: l.id,
    label: l.label,
    href: l.href,
    isDesktop: l.isDesktop,
    isExternal: l.isExternal,
    type: l.type,
    icon: l.icon,
  }));
}
