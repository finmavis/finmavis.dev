import React from 'react';
import type { HeadProps } from 'gatsby';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import About from 'src/components/about';

export default function AboutPage() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}

export function Head({ location }: HeadProps) {
  return <SEO title='About' pathname={location.pathname} />;
}
