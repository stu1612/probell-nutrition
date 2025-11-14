import { DisplayBlock, HeadingBlock, SectionBase } from "@/types/components";
import { MediaTypeEnum } from "@/types/enums";

type HeroBlock = {
  id: string;
  display: DisplayBlock;
  layout: SectionBase;
};

export type HeroBlockResult = {
  heroes: HeroBlock[];
};

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
