import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';

export default function AboutPage({ location }) {
  return (
    <Layout>
      <SEO title='About Fin Mavis' pathname={location.pathname} />
      <About />
    </Layout>
  );
}
