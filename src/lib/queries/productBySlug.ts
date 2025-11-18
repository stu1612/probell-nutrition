export const PRODUCT_BY_SLUG = `
  query ProductBySlug($slug: String!, $stage: Stage!) {
    productBlock(where: { slug: $slug }, stage: $stage) {
      id
      title
      slug
      excerpt
      longDescription
      healthCategory
      isAvailable

      productSpec {
        packageSize
        servings
        allergens
      }

      productImage {
        id
        url
        width
        height
        fileName
      }

      gallery {
        id
        url
        width
        height
        fileName
      }

      benefits
      whenToUse
      howToUse
      pairsWellWith {
        id
        title
        slug
        image {
          url
          width
          height
          fileName
        }
      }

      complianceNotes
    }
  }
`;
