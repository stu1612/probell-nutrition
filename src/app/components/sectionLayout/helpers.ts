export function spacingToClass(
  v?: string | null,
  axis: "t" | "b" = "t"
): string {
  // normalize (supports "SM" | "sm" | "Sm")
  const key = (v ?? "md").toString().toLowerCase();

  // tweak the scale to your taste
  const scale: Record<string, string> = {
    none: "0",
    xs: "2",
    sm: "6",
    md: "8",
    lg: "12",
    xl: "16",
    "2xl": "24",
  };

  const n = scale[key] ?? scale["md"];
  return `${axis === "t" ? "pt" : "pb"}-${n}`;
}

export function themeToClass(theme?: string | null): string {
  const t = (theme ?? "light").toString().toLowerCase();
  if (t === "dark") return "bg-black text-white";
  return "bg-white text-gray-900";
}
