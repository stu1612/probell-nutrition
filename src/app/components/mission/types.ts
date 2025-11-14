import { SectionBase, HeadingBlock } from "@/types/components";

export type MissionBlock = {
  id: string;
  heading: HeadingBlock;
  layout: SectionBase;
};

export type MissionBlockResult = {
  missions: MissionBlock[];
};

export type MissionViewModel = {
  id: string;
  heading: HeadingBlock;
  layout: SectionBase;
};
