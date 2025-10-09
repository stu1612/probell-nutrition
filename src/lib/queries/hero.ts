export const HERO_BLOCK = `
  query HeroImageAndHeadingBlock {
    heroes(first: 1, stage: PUBLISHED) {
      id
      display {
        id
        heading {
          id
          title
          subtitle
          description
          cta {
            id
            label
            ariaLabel
            isInternalUrlLink
            internalUrlLink
            openInNewTab
            buttonVariant
          }
        }
        mediaType
        mediaPrimary {
          url
        }
        mediaPrimaryDecoration
        mediaPrimaryAlt
        mediaSecondary {
          url
        }
        mediaSecondaryDecoration
        mediaSecondaryAlt
        primaryImageLayout
        secondaryImageLayout
        autoPlay
        loop
        controls
        captionsUrl
        transcriptUrl
      }
      layout {
        isVisible
        theme
        paddingTop
        paddingBottom
        anchorId
        internalLabel
        sectionHeading
      }
    }
  }
`;
