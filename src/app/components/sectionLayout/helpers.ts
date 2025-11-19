const PADDING_MAP = {
  t: {
    none: "pt-0",
    xs: "pt-2",
    sm: "pt-6",
    md: "pt-8",
    lg: "pt-12",
    xl: "pt-16",
    "2xl": "pt-24",
  },
  b: {
    none: "pb-0",
    xs: "pb-2",
    sm: "pb-6",
    md: "pb-8",
    lg: "pb-12",
    xl: "pb-16",
    "2xl": "pb-24",
  },
} as const;

type SpacingKey = keyof typeof PADDING_MAP.t;

export function spacingToClass(
  v?: string | null,
  axis: "t" | "b" = "t"
): string {
  const key = (v ?? "md").toLowerCase() as SpacingKey;
  return PADDING_MAP[axis][key] ?? PADDING_MAP[axis].md;
}

// export function spacingToClass(
//   v?: string | null,
//   axis: "t" | "b" = "t"
// ): string {
//   const key = (v ?? "md").toString().toLowerCase();

//   const scale: Record<string, string> = {
//     none: "0",
//     xs: "2",
//     sm: "6",
//     md: "8",
//     lg: "12",
//     xl: "16",
//     "2xl": "24",
//   };

//   const n = scale[key] ?? scale["md"];
//   return `${axis === "t" ? "pt" : "pb"}-${n}`;
// }

// export function themeToClass(theme?: string | null): string {
//   const t = (theme ?? "light").toString().toLowerCase();
//   if (t === "dark") return "bg-black text-white";
//   return "bg-white text-gray-900";
// }
