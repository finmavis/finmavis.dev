import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';

export default function AboutPage() {
  return (
    <Layout>
      <SEO title='About' />
      <About />
    </Layout>
  );
}
