// import { hygraph } from "@/lib/hygraph";
// import { NAVBAR_BLOCK } from "@/lib/queries";
// import { CMS_NavItem } from "./types";
// import { toNavVM } from "./mappers";

// import NavbarClient from "./NavbarClient";

// type CMS_Navbar = {
//   id: string;
//   navItems: CMS_NavItem[];
// };

// export default async function Navbar() {
//   const { navbars } = await hygraph<{ navbars: CMS_Navbar[] }>({
//     query: NAVBAR_BLOCK,
//     variables: { stage: "PUBLISHED" },
//   });

//   // properties
//   const navbar = navbars?.[0];
//   const vm = toNavVM(navbar?.navItems ?? []);

//   return <NavbarClient vm={vm} />;
// }

import React from "react";

export default function Navbar() {
  return <div>Navbar</div>;
}
