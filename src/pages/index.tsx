import React from 'react';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import Hero from 'src/components/hero';
import Playground from 'src/components/playground';
import Experience from 'src/components/experience';
import Tech from 'src/components/tech';
import Education from 'src/components/education';
import BlogPreview from 'src/components/blog-preview';

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Playground />
      <Experience />
      <Tech />
      <Education />
      <BlogPreview />
    </Layout>
  );
}

export function Head() {
  return <SEO title='Home' />;
}
