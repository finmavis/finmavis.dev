import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Container from '../components/container';

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
      }
    }
  }
`;

export default function BlogPost({ data }) {
  return (
    <Layout>
      <Container>
        <section
          css={css`
            display: block;
            padding-top: 3.5rem;
            color: var(--color-primary);
          `}
        >
          <h1>{data.markdownRemark.frontmatter.title}</h1>
        </section>
      </Container>
    </Layout>
  );
}
