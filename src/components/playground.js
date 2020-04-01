import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import Container from './ui/container';
import HeadingSection from './ui/heading-section';
import Card from './ui/card';

import { PLAYGROUND_DATA } from '../shared/constants/playground.constant';

export default function Playground(props) {
  const data = useStaticQuery(graphql`
    query {
      styleTheory: file(relativePath: { eq: "style-theory.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tunaiku: file(relativePath: { eq: "tunaiku.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tmdb: file(relativePath: { eq: "tmdb.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      purgecss: file(relativePath: { eq: "purgecss.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      svg: file(relativePath: { eq: "svg.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
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
        <div
          css={css`
            display: flex;
            overflow-x: auto;
            padding-bottom: 1.25rem;

            @media (hover: hover) {
              &::-webkit-scrollbar {
                width: 0.5rem;
                height: 0.5rem;
              }

              &::-webkit-scrollbar-thumb {
                background-color: var(--scrollbar-thumb);
                border-radius: 1rem;
              }

              &::-webkit-scrollbar-track {
                background-color: var(--scrollbar-track);
                border-radius: 1rem;
              }
            }
          `}
        >
          {PLAYGROUND_DATA.map(({ name, imageName, description, link }) => (
            <div
              key={name}
              css={css`
                flex: 0 0 15rem;
                max-width: 15rem;
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
                  <Img
                    fluid={data[imageName].childImageSharp.fluid}
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
      </Container>
    </section>
  );
}
