import React from 'react';
import Hero from '../components/hero';
import Insta from '../components/insta';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import ProductsList from '../components/products-list';
import { css } from '@emotion/core';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read My Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
        <hr
          css={css`
            border: 1px solid #ddd;
          `}
        />
        <ProductsList />
      </Layout>
    </>
  );
};
