import React from 'react';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import NotFound from 'src/components/not-found';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title='404: Not found' />
      <NotFound />
    </Layout>
  );
}

export function Head() {
  return <SEO title='404: Not found' />;
}
