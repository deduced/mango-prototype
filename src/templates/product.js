import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';

//The reason we have this query is as a best practice. The slug is passed to this component via the gatsby-node.js and that is why slug is available for query. By making query available in this component, we colocate data and avoid a "blackbox" if we had passed the entire post as postContext from gatsby-node
export const query = graphql`
  query($id: String!) {
    shopifyProduct(shopifyId: { eq: $id }) {
      title
      description
      images {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
    }
  }
`;

const ProductTemplate = ({ data: { shopifyProduct: product } }) => {
  console.log(product);

  return (
    <Layout>
      <h1>{product.title}</h1>
      <span
        css={css`
          color: #f218a2ff;
        `}
      >
        ${product.priceRange.maxVariantPrice.amount}
      </span>
      <div>{product.description}</div>

      <Image
        fluid={product.images[0].localFile.childImageSharp.fluid}
        alt={product.title}
        css={css`
          width: 100%;
          * {
            margin-top: 0;
          }
        `}
      />
    </Layout>
  );
};

export default ProductTemplate;
