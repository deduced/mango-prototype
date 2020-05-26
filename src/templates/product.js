import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';

//The reason we have this query is as a best practice. The slug is passed to this component via the gatsby-node.js and that is why slug is available for query. By making query available in this component, we colocate data and avoid a "blackbox" if we had passed the entire post as postContext from gatsby-node
export const productQuery = graphql`
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
  return (
    <Layout>
      <h1>{product.title}</h1>
      <span
        css={css`
          color: #555;
          padding-right: 0.25rem;
          text-decoration: line-through;
        `}
      >
        ${Number(product.priceRange.maxVariantPrice.amount)}
      </span>
      <span
        css={css`
          color: #f218a2ff;
        `}
      >
        ${Number(product.priceRange.minVariantPrice.amount)}
      </span>
      <div>{product.description}</div>

      <Image
        fluid={product.images[0].localFile.childImageSharp.fluid}
        alt={product.title}
        css={css`
          margin-bottom: 1rem;
          width: 50%;
          * {
            margin-top: 0;
          }
        `}
      />
      <a href={`/products`}>See all themes &rarr;</a>
    </Layout>
  );
};

export default ProductTemplate;
