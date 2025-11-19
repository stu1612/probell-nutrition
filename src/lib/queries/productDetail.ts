export const PRODUCT_DETAIL = /* GraphQL */ `
  query ProductDetail($stage: Stage!) {
    productLists(stage: $stage) {
      id
      product {
        id
        title
        slug
        excerpt
        longDescription
        healthCategory
        isAvailable

        productSpec {
          unitSize
          servingsSize
          notes
          ingredients
          unitsPerCase
          servingsPerUnit
          allergyList
          nutritionalInformation
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
          productImage {
            id
            url
            width
            height
            fileName
          }
        }

        complianceNotes
      }
    }
  }
`;
