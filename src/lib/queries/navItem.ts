export const NAVBAR_BLOCK = /* GraphQL */ `
  query NAVBAR($stage: Stage!) {
    navbars(stage: $stage, first: 1) {
      id
      navItems(orderBy: sortOrder_ASC, where: { isActive: true }) {
        id
        label
        pageSlug
        anchorId
        externalUrl
        sortOrder
        isActive
        type
        location
      }
    }
  }
`;
