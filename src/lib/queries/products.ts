// lib/queries.ts
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
        isAvailable
        productImage {
          id
          url
          width
          height
          fileName
        }
        seo {
          ogImageAlt
        }
      }
    }
  }
`;
