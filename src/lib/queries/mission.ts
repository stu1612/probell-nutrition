export const MISSION_BLOCK = /* GraphQL */ `
  query MissionBlock {
    missions(stage: PUBLISHED) {
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
