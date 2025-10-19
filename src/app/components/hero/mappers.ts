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
  decorations: {
    primary: boolean;
    secondary: boolean;
  };
};

export function toHeroVM(display: DisplayBlock): HeroViewModel {
  const heading = display.heading ?? ({} as HeadingBlock);

  const title = isNonEmpty(heading.title) ? heading.title! : null;
  const subtitle = isNonEmpty(heading.subtitle) ? heading.subtitle! : null;
  const description = isNonEmpty(heading.description)
    ? heading.description!
    : null;

  const mediaType = normalizeMediaType(display.mediaType ?? null);

  const primary = imageProps(display.mediaPrimary, title ?? "");
  const secondary = display.mediaSecondary
    ? imageProps(display.mediaSecondary, title ?? "")
    : null;

  return {
    title,
    subtitle,
    description,
    mediaType,
    primary: { ...primary, alt: display.mediaPrimaryAlt ?? primary.alt },
    secondary: secondary
      ? { ...secondary, alt: display.mediaSecondaryAlt ?? secondary.alt }
      : null,
    cta: heading.cta ?? display.cta ?? null,
    primaryLayout: display.primaryImageLayout ?? null,
    secondaryLayout: display.secondaryImageLayout ?? null,
    decorations: {
      primary: !!display.mediaPrimaryDecoration,
      secondary: !!display.mediaSecondaryDecoration,
    },
  };
}
