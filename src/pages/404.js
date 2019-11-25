import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../components/not-found';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
