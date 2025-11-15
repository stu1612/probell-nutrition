export type NavLinkType = "primary" | "secondary";

export type NavLink = {
  id: string;
  label: string;
  href: string;
  isDesktop: boolean;
  isAnchor?: boolean;
  isExternal: boolean;
  type: NavLinkType;
  icon?: React.ComponentType<{ className?: string }>;
};

export type NavigationProps = {
  links: NavLink[];
  pathname: string;
};

export type LinkTypeProps = {
  links: NavLink[];
};
