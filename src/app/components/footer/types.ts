export type FooterLink =
  | {
      label: string;
      href: string; // internal route
      isExternal?: false; // discriminator
    }
  | {
      label: string;
      href: string; // external URL
      isExternal: true; // discriminator
      target?: "_blank";
      rel?: string;
    };

export type FooterSectionProps = {
  title: string;
  links: FooterLink[];
};
