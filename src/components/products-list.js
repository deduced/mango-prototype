import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useProducts from '../hooks/use-products';

const ProductsList = () => {
  const products = useProducts();
  console.log(products);

  return (
    <>
      <h2>Premium Themes FTW!</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem 0.5rem;
          padding: 0.5rem;
        `}
      >
        {products.map(product => (
          <a
            key={product.shopifyId}
            href={`product/${product.handle}`}
            css={css`
              display: block;
              box-shadow: 0;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 100%;
              padding: 0.5rem;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
              text-decoration: none;
            `}
          >
            <Image
              fluid={product.images[0].fluid}
              alt={product.title}
              css={css`
                width: 100%;
                margin-bottom: 0.5rem;
                * {
                  margin-top: 0;
                }
              `}
            />
            <span
              css={css`
                font-size: 0.8rem;
              `}
            >
              {product.title}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
