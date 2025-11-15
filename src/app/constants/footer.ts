import { FooterLink } from "../components/footer/types";

export const FOOTER_RESOURCES: FooterLink[] = [
  { label: "Products", href: "/products" },
  { label: "The Kettlebell", href: "/the-kettlebell" },
];

export const FOOTER_FOLLOW_US: FooterLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/probellnutrition/",
    isExternal: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/probellnutrition/",
    isExternal: true,
  },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: "Our Policies", href: "/legal" },
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
];
