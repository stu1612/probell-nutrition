import { DisplayBlock, SectionBase } from "@/types/components";

type HeroBlock = {
  id: string;
  display: DisplayBlock;
  layout: SectionBase;
};

export type HeroBlockResult = {
  heroes: HeroBlock[];
};
