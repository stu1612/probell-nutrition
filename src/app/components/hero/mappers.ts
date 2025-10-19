// app/(catalog)/hero/mappers.ts
import type { DisplayBlock, HeadingBlock } from "@/types/components";
import type { MediaTypeEnum } from "@/types/enums";
import { normalizeMediaType, imageProps, isNonEmpty } from "./helpers";

export type HeroViewModel = {
  title: string | null;
  subtitle: string | null;
  description: string | null;
  mediaType: MediaTypeEnum | null;
  primary: { url: string; width: number; height: number; alt: string };
  secondary?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  } | null;
  cta: HeadingBlock["cta"] | null;
  primaryLayout: string | null;
  secondaryLayout: string | null;
  decorations: { primary: boolean; secondary: boolean };
};

export function toHeroVM(display: DisplayBlock): HeroViewModel {
  const heading = (display.heading ?? {}) as HeadingBlock;

  const title = isNonEmpty(heading.title) ? heading.title! : null;
  const subtitle = isNonEmpty(heading.subtitle) ? heading.subtitle! : null;
  const description = isNonEmpty(heading.description)
    ? heading.description!
    : null;

  const hasPrimaryUrl = !!display.mediaPrimary?.url;
  const hasSecondaryUrl = !!display.mediaSecondary?.url;

  // Guard: if no media URLs at all, treat as no media
  const mediaType: MediaTypeEnum | null =
    hasPrimaryUrl || hasSecondaryUrl
      ? normalizeMediaType(display.mediaType ?? null)
      : null;

  // Primary image (simple fallback alt to title or brand)
  const primaryBase = imageProps(
    display.mediaPrimary,
    title ?? "Probell Nutrition brand image"
  );
  const primary = {
    ...primaryBase,
    alt: display.mediaPrimaryAlt ?? primaryBase.alt,
  };

  // Secondary image (empty alt if decorative)
  const secondaryBase = hasSecondaryUrl
    ? imageProps(
        display.mediaSecondary,
        title ?? "Probell Nutrition brand image"
      )
    : null;

  const secondary =
    secondaryBase &&
    ({
      ...secondaryBase,
      alt:
        display.mediaSecondaryDecoration === true
          ? "" // decorative: screen readers ignore
          : display.mediaSecondaryAlt ?? secondaryBase.alt,
    } as const);

  return {
    title,
    subtitle,
    description,
    mediaType,
    primary,
    secondary: secondary ?? null,
    cta: heading.cta ?? display.cta ?? null,
    primaryLayout: display.primaryImageLayout ?? null,
    secondaryLayout: display.secondaryImageLayout ?? null,
    decorations: {
      primary: !!display.mediaPrimaryDecoration,
      secondary: !!display.mediaSecondaryDecoration,
    },
  };
}
