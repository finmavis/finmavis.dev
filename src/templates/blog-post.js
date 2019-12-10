import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Container from '../components/container';

export default function BlogPost({ data, pageContext }) {
  const { previous, next } = pageContext;

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
          {previous && <Link to={previous.frontmatter.path}>Previous</Link>}
          {next && <Link to={next.frontmatter.path}>Next</Link>}
        </section>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
      }
    }
  }
`;
