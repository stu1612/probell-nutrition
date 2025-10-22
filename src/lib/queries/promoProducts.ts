// export const PROMO_PRODUCTS = `
//   query PromoFromProductLists($limit: Int = 3) {
//     productLists(stage: PUBLISHED, first: 1) {
//       id
// product(where: { isAvailable: true, isCarousel: true }, first: $limit) {
//   id
//   title
//   slug
//   excerpt
//   productImage {
//     url
//   }
// }
// layout {
//   isVisible
//   theme
//   paddingTop
//   paddingBottom
//   anchorId
//   internalLabel
//   sectionHeading
// }
//     }
//   }
// `;

export const PROMO_PRODUCTS = `
  query CarouselSectionBlock($stage: Stage! = PUBLISHED, $limit: Int = 3) {
    carouselSections(stage: $stage) {
      id
      layout {
        isVisible
        theme
        paddingTop
        paddingBottom
        anchorId
        internalLabel
        sectionHeading
      }
      productList {
        id
        product(
          where: { isAvailable: true, isCarousel: true }
          first: $limit
        ) {
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
  }
`;
