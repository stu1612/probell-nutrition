// app/(catalog)/hero/helpers.ts
import type { Asset } from "@/types/components";
import { MediaTypeEnum } from "@/types/enums";

export function normalizeMediaType(mt?: string | null): MediaTypeEnum | null {
  if (!mt) return null;
  const up = mt.toUpperCase();
  return up === "IMAGE" || up === "VIDEO" ? (up as MediaTypeEnum) : null;
}

export function isNonEmpty(s?: string | null): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

export function imageProps(asset?: Asset | null, fallbackAlt?: string) {
  const url = asset?.url ?? "";
  const width = asset?.width ?? 1200;
  const height = asset?.height ?? 630;
  const alt = fallbackAlt ?? "";
  return { url, width, height, alt };
}
