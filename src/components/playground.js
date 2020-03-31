import React from 'react';
import { css } from '@emotion/core';

import Container from './container';
import HeadingSection from './heading-section';

import styletheory from '../shared/assets/images/style-theory.jpg';

const PLAYGROUND_DATA = [
  {
    name: 'Style Theory',
    image: styletheory,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Tunaiku',
    image: styletheory,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'TMDB Clone',
    image: styletheory,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Razzle PurgeCSS',
    image: styletheory,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Razzle SVG Plugin',
    image: styletheory,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export default function Playground() {
  return (
    <section
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container
        css={css`
          max-width: 1100px;
        `}
      >
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
          {PLAYGROUND_DATA.map(item => (
            <div
              key={item.name}
              css={css`
                flex: 0 0 15rem;
                max-width: 15rem;
                background-color: var(--bg-blog-list);
                font-weight: 700;
                box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
                margin-left: 0.5rem;
                margin-right: 0.5rem;
                position: relative;
                border-radius: 5px;
                overflow: hidden;

                &:first-of-type {
                  margin-left: 0.35rem;
                }
              `}
            >
              <div>
                <img
                  css={css`
                    display: block;
                    width: 100%;
                    margin-bottom: 0.5rem;
                  `}
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div
                css={css`
                  padding: 0 1rem 1rem;
                  text-align: center;
                `}
              >
                <h4
                  css={css`
                    margin: 1rem 0 0.25rem;
                    text-transform: uppercase;
                  `}
                >
                  {item.name}
                </h4>
                <p
                  css={css`
                    margin: 0;
                  `}
                >
                  {item.description}
                </p>
              </div>
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
