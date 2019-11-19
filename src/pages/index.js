import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Playground from '../components/playground';
import Experience from '../components/experience';
import Tech from '../components/tech';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
    <Playground />
    <Experience />
    {/* <Tech /> */}
  </Layout>
);

export default IndexPage;
