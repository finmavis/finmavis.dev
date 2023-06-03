import React from 'react';
import { css } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './ui/container';
import HeadingSection from './ui/heading-section';
import Card from './ui/card';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { PLAYGROUND_DATA } from '../shared/constants/playground.constant';

export default function Playground(props) {
  const data = useStaticQuery(graphql`
    query {
      styleTheory: file(relativePath: { eq: "style-theory.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      tunaiku: file(relativePath: { eq: "tunaiku.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      tmdb: file(relativePath: { eq: "tmdb.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      purgecss: file(relativePath: { eq: "purgecss.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      svg: file(relativePath: { eq: "svg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <section
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container sizes='large'>
        <HeadingSection>Playground</HeadingSection>
        <OverlayScrollbarsComponent
          options={{
            className: 'os-theme-light',
          }}
        >
          <div
            css={css`
              display: flex;
              padding-bottom: 1.25rem;
            `}
          >
            {PLAYGROUND_DATA.map(({ name, imageName, description, link }) => (
              <div
                key={name}
                css={css`
                  flex: 0 0 16rem;
                  max-width: 16rem;
                  font-weight: 700;
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                `}
              >
                <Card>
                  <a
                    href={link}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <GatsbyImage
                      image={data[imageName].childImageSharp.gatsbyImageData}
                      alt={name}
                      css={css`
                        display: block;
                        margin-bottom: 0.5rem;
                        width: 100%;
                      `}
                    />
                  </a>
                  <div
                    css={css`
                      padding: 0 1rem 1rem;
                      text-align: center;
                    `}
                  >
                    <a
                      href={link}
                      target='_blank'
                      rel='nofollow noopener noreferrer'
                    >
                      <h4
                        css={css`
                          margin: 1rem 0 0.25rem;
                          text-transform: uppercase;
                        `}
                      >
                        {name}
                      </h4>
                    </a>
                    <p
                      css={css`
                        margin: 0;
                      `}
                    >
                      {description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
            <div
              css={css`
                visibility: hidden;
                border: 1px solid transparent;
              `}
            ></div>
          </div>
        </OverlayScrollbarsComponent>
      </Container>
    </section>
  );
}
