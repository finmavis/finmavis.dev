import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/ui/container';
import HeadingSection from '../components/ui/heading-section';
import Card from '../components/ui/card';

export default function Blog({ data, pageContext, location }) {
  const { allMarkdownRemark, site } = data;
  const { currentPage, numberOfPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;

  return (
    <Layout>
      <SEO
        title='Blog'
        description={`Come take a look ${site.siteMetadata.author}'s personal notes. Maybe you will find something useful and learn from it.`}
        pathname={location.pathname}
      />
      <section
        css={css`
          padding-top: 3.5rem;
          display: block;

          @media (max-width: 900px) {
            padding-top: 2rem;
          }
        `}
      >
        <Container sizes='small'>
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
                  margin-bottom: 2rem;

                  @media (max-width: 900px) {
                    margin-bottom: 1.5em;
                  }
                `}
              >
                <Card>
                  <div
                    css={css`
                      max-height: 12.5rem;

                      @media (min-width: 600px) {
                        max-height: 17.5rem;
                      }

                      @media (min-width: 900px) {
                        max-height: 20rem;
                      }
                    `}
                  >
                    <Link to={node.frontmatter.path}>
                      <GatsbyImage
                        image={
                          node.frontmatter.banner.childImageSharp
                            .gatsbyImageData
                        }
                        alt={node.frontmatter.title}
                        css={css`
                          max-height: 12.5rem;

                          @media (min-width: 600px) {
                            max-height: 17.5rem;
                          }

                          @media (min-width: 900px) {
                            max-height: 20rem;
                          }
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
                </Card>
              </div>
            ))}
          </div>
          {numberOfPages !== 1 && (
            <div
              css={css`
                display: flex;
                margin-bottom: 2rem;
              `}
            >
              {!isFirst && (
                <Link
                  to={prevPage}
                  rel='prev'
                  css={css`
                    margin-right: auto;
                  `}
                >
                  &larr; Previous Page
                </Link>
              )}
              {!isLast && (
                <Link
                  to={nextPage}
                  rel='next'
                  css={css`
                    margin-left: auto;
                  `}
                >
                  Next Page &rarr;
                </Link>
              )}
            </div>
          )}
        </Container>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        author
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            bannerCreditName
          }
        }
      }
    }
  }
`;
