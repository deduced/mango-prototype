import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default () => (
  <>
    <Hero />
    <Layout>
      <h1>About me</h1>
      <p>This is my site boy!</p>
      <Link to="/">&larr; to home</Link>
    </Layout>
  </>
);
