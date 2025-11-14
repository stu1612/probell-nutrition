import type { MissionBlock, MissionViewModel } from "./types";

export function toMissionVM(block: MissionBlock): MissionViewModel {
  return {
    id: block.id,
    heading: block.heading,
    layout: block.layout,
  };
}
