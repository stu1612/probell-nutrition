export type CMS_NavItem = {
  id: string;
  label: string;
  pageSlug?: string | null;
  anchorId?: string | null;
  externalUrl?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  type?: "page" | "anchor" | string | null;
  location?: "primary" | "secondary" | string | null;
};

export type NavLink = {
  id: string;
  label: string;
  href: string;
  external: boolean;
  location: "primary" | "secondary" | "other";
};

export type NavVM = {
  primary: NavLink[];
  secondary: NavLink[];
  all: NavLink[];
};
