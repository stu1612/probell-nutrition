export const PROMO_PRODUCTS = `
  query PromoFromProductLists($limit: Int = 3) {
    productLists(stage: PUBLISHED, first: 1) {
      id
      product(where: { isAvailable: true, isCarousel: true }, first: $limit) {
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
