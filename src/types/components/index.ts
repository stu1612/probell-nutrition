import {
  ButtonVariantEnum,
  MediaTypeEnum,
  ImageLayoutEnum,
  ThemeEnum,
  SpacingEnum,
} from "../enums";

export type HeadingBlock = {
  id: string;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  cta?: Cta | null;
};

export type Cta = {
  id: string;
  label: string;
  ariaLabel?: string | null;
  isInternalLink: boolean;
  internalUrlLink?: string | null;
  openInNewTab?: boolean | null;
  buttonVariant?: ButtonVariantEnum | null;
};

export type Asset = {
  url: string;
  fileName?: string | null;
  mimeType?: string | null;
  size?: number | null;
  width?: number | null;
  height?: number | null;
};

export type DisplayBlock = {
  stage: "DRAFT" | "PUBLISHED";
  id: string;

  mediaPrimaryDecoration?: boolean | null;
  mediaPrimaryAlt?: string | null;
  mediaSecondaryDecoration?: boolean | null;
  mediaSecondaryAlt?: string | null;

  autoPlay?: boolean | null;
  muted?: boolean | null;
  loop?: boolean | null;
  controls?: boolean | null;

  captionsUrl?: string | null;
  transcriptUrl?: string | null;

  heading: HeadingBlock; // NON_NULL in schema
  cta?: Cta | null;

  mediaType?: MediaTypeEnum | null;
  primaryImageLayout?: ImageLayoutEnum | null;
  secondaryImageLayout?: ImageLayoutEnum | null;

  mediaPrimary: Asset; // NON_NULL
  mediaSecondary?: Asset | null;
  videoPosterImage?: Asset | null;

  updatedAt?: string | null; // ISO string
};

export type SectionBase = {
  isVisible: boolean;
  theme: ThemeEnum;
  paddingTop: SpacingEnum;
  paddingBottom: SpacingEnum;
  anchorId?: string | null;
  internalLabel?: string | null;
  sectionHeading?: string | null;
};
