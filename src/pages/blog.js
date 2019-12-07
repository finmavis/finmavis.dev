import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/blog';

const BlogPage = () => (
  <Layout>
    <SEO title='Blog' />
    <Blog />
  </Layout>
);

export default BlogPage;
