import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import HeadingSection from '../components/heading-section';

export default function Blog({ data, pageContext }) {
  const { allMarkdownRemark } = data;
  const { currentPage, numberOfPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title='Blog' />
      <section
        css={css`
          padding-top: 3.5rem;
          display: block;
        `}
      >
        <Container
          css={css`
            max-width: 800px;
          `}
        >
          <HeadingSection
            css={css`
              text-align: left;
            `}
          >
            Recent Articles
          </HeadingSection>
          <div>
            {allMarkdownRemark.edges.map(({ node }) => (
              <div
                key={node.id}
                css={css`
                  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
                  background-color: var(--bg-blog-list);
                  margin-bottom: 3rem;

                  @media (max-width: 900px) {
                    margin-bottom: 1.5em;
                  }
                `}
              >
                <div
                  css={css`
                    max-height: 20rem;
                  `}
                >
                  <Link to={node.frontmatter.path}>
                    <Img
                      fluid={node.frontmatter.banner.childImageSharp.fluid}
                      alt={node.frontmatter.bannerCreadit}
                      css={css`
                        max-height: 20rem;
                      `}
                    />
                  </Link>
                </div>
                <div
                  css={css`
                    padding: 0 2rem 2rem;
                    color: var(--color-primary);

                    @media (max-width: 900px) {
                      padding: 0 1.5rem 1.5rem;
                    }
                  `}
                >
                  <Link to={node.frontmatter.path}>
                    <h3
                      css={css`
                        color: var(--color-primary);
                        margin-bottom: 0.3rem;
                      `}
                    >
                      {node.frontmatter.title}
                    </h3>
                  </Link>
                  <p
                    css={css`
                      margin-bottom: 0.725rem;
                    `}
                  >
                    <small>
                      {node.frontmatter.date} • {node.timeToRead} min read
                    </small>
                  </p>
                  <p>{node.excerpt}</p>
                  <Link
                    css={css`
                      color: var(--cornflower-blue);
                    `}
                    to={node.frontmatter.path}
                  >
                    Read &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {!isFirst && (
            <Link to={prevPage} rel='prev'>
              &larr; Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel='next'>
              Next Page &rarr;
            </Link>
          )}
        </Container>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            banner {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
