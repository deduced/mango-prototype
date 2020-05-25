import { useStaticQuery, graphql } from 'gatsby';

const useProducts = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        nodes {
          title
          images {
            localFile {
              sharp: childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          shopifyId
          handle
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  `);

  const products = data.allShopifyProduct.nodes;

  return products.map(product => ({
    description: product.description,
    handle: product.handle,
    images: product.images.map(image => image.localFile.sharp),
    priceRange: product.priceRange,
    shopifyId: product.shopifyId,
    title: product.title,
  }));
};

export default useProducts;
