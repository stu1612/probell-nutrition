import { hygraph } from "@/lib/hygraph";
import { NAVBAR_BLOCK } from "@/lib/queries";
import NavbarClient from "./NavbarClient";
import { CMS_NavItem } from "./types";

import { toNavVM } from "./mappers";

type CMS_Navbar = {
  id: string;
  navItems: CMS_NavItem[];
};

export default async function Navbar() {
  const { navbars } = await hygraph<{ navbars: CMS_Navbar[] }>({
    query: NAVBAR_BLOCK,
    variables: { stage: "PUBLISHED" },
  });

  const navbar = navbars?.[0];
  const vm = toNavVM(navbar?.navItems ?? []);

  return <NavbarClient vm={vm} />;
}
