import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';

//The reason we have this query is as a best practice. The slug is passed to this component via the gatsby-node.js and that is why slug is available for query. By making query available in this component, we colocate data and avoid a "blackbox" if we had passed the entire post as postContext from gatsby-node

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Authored by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; Back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
