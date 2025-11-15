export type NavigationProps = {
  links: NavLink[];
  pathname: string;
};

export type LinkTypeProps = {
  links: NavLink[];
};

type NavLink = {
  id: string;
  label: string;
  href: string;
  isDesktop: boolean;
  isAnchor?: boolean;
  isExternal?: boolean;
  type?: "primary" | "secondary";
  icon?: React.ComponentType<{ className?: string }>;
};
