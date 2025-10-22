export const PRODUCTS = `
  query ProductLists() {
    productLists(stage: PUBLISHED, first: 1) {
      id
      product(where: { isAvailable: true }, first: $limit) {
        id
        title
        slug
        excerpt
        productImage {
          url
        }
      }
    }
  }
`;
