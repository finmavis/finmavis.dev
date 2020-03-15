import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Playground from '../components/playground';
import Experience from '../components/experience';
import Tech from '../components/tech';
import Education from '../components/education';
import BlogPreview from '../components/blog-preview';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title='Home' />
      <Hero />
      <Playground />
      <Experience />
      <Tech />
      <Education />
      <BlogPreview />
    </Layout>
  );
}
