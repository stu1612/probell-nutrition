// next
import Link from "next/link";

// internal libs (api, queries, uitls, enums, types)
import { ButtonVariantEnum } from "@/types/enums";
import { Cta } from "@/types/components";

// npm
import clsx from "clsx";

type AppLinkProps = {
  cta: Cta;
  className?: string;
};

export default function AppLink({ cta, className }: AppLinkProps) {
  const href = cta.internalUrlLink ?? "#";
  const isInternal = cta.isInternalLink;
  const ariaLabel =
    cta.ariaLabel && cta.ariaLabel !== cta.label ? cta.ariaLabel : undefined;

  // className =
  //   "rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400";
  // --- Base style ---
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium transition-colors duration-200";

  // --- Variant logic from your enum ---
  const variants: Record<ButtonVariantEnum, string> = {
    [ButtonVariantEnum.PRIMARY]:
      "bg-gold border text-black hover:bg-transparent hover:text-white hover:border-gold",
    [ButtonVariantEnum.SECONDARY]:
      "bg-[var(--color-off-white)] text-black hover:bg-gray-200",
    [ButtonVariantEnum.OUTLINE]:
      "border border-black text-black hover:bg-black hover:text-white",
    [ButtonVariantEnum.GHOST]: "bg-transparent text-black hover:bg-gray-100",
    [ButtonVariantEnum.LINK]:
      "bg-transparent text-[var(--color-gold)] hover:underline p-0",
  };

  const variantClass =
    cta.buttonVariant && variants[cta.buttonVariant]
      ? variants[cta.buttonVariant]
      : variants[ButtonVariantEnum.PRIMARY];

  const css = clsx(base, variantClass, className);

  if (isInternal) {
    return (
      <Link href={href} aria-label={ariaLabel} className={css}>
        {cta.label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={cta.openInNewTab ? "_blank" : "_self"}
      rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
      className={css}
    >
      {cta.label}
    </a>
  );
}
