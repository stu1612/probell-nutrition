export const PRODUCT_LIST = `
  query ProductList($stage: Stage!) {
    productLists(stage: $stage) {
      id
      product {
        id
        title
        slug
        excerpt
        healthCategory   
        image {
          id
          url
          width
          height
          alt
        }
      }
    }
  }
`;
