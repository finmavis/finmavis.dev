import React from 'react';
import { css, keyframes } from '@emotion/core';

import Container from './container';
import HeadingSection from './heading-section';

import AngularIcon from '../shared/assets/svg/angular.svg';
import ApolloIcon from '../shared/assets/svg/apollo.inline.svg';
import BabelIcon from '../shared/assets/svg/babel.svg';
import CssIcon from '../shared/assets/svg/css.svg';
import GatsbyIcon from '../shared/assets/svg/gatsby.inline.svg';
import GraphQLIcon from '../shared/assets/svg/graphql.svg';
import HtmlIcon from '../shared/assets/svg/html.svg';
import JsIcon from '../shared/assets/svg/javascript.svg';
import JestIcon from '../shared/assets/svg/jest.svg';
import NodejsIcon from '../shared/assets/svg/nodejs.inline.svg';
import ParcelIcon from '../shared/assets/svg/parceljs.svg';
import ReactIcon from '../shared/assets/svg/reactjs.svg';
import ReduxIcon from '../shared/assets/svg/redux.inline.svg';
import SassIcon from '../shared/assets/svg/sass.svg';
import TsIcon from '../shared/assets/svg/typescript.svg';
import WebpackIcon from '../shared/assets/svg/webpack.inline.svg';

const slide = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-28rem, 0, 0);
  }
`;

const slide1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-31rem, 0, 0);
  }
`;

const slide2 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-34rem, 0, 0);
  }
`;

const slide3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-40rem, 0, 0);
  }
`;

const slide4 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-45rem, 0, 0);
  }
`;

const slide5 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50rem, 0, 0);
  }
`;

const slide6 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-52rem, 0, 0);
  }
`;

export default function Tech(props) {
  return (
    <section
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container>
        <HeadingSection>Technologies</HeadingSection>
        <div
          css={css`
            overflow: hidden;

            & > * {
              margin: 0;
            }

            svg {
              height: 3rem;

              .icon-label {
                fill: var(--color-primary);
              }
            }

            img {
              display: inline-block;
              height: 3rem;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              margin-bottom: 1rem;
              width: 71.75rem;
              animation: ${slide} 30s linear alternate both infinite;

              @media (max-width: 900px) {
                animation: ${slide1} 30s linear alternate both infinite;
              }

              @media (max-width: 800px) {
                animation: ${slide2} 30s linear alternate both infinite;
              }

              @media (max-width: 700px) {
                animation: ${slide3} 30s linear alternate both infinite;
              }

              @media (max-width: 600px) {
                animation: ${slide4} 30s linear alternate both infinite;
              }

              @media (max-width: 500px) {
                animation: ${slide5} 30s linear alternate both infinite;
              }

              @media (max-width: 400px) {
                animation: ${slide6} 30s linear alternate both infinite;
              }

              & > * {
                flex-shrink: 0;
              }
            `}
          >
            <img src={HtmlIcon} alt='HTML5' />
            <img src={CssIcon} alt='CSS3' />
            <img src={BabelIcon} alt='Babel' />
            <WebpackIcon />
            <img src={JestIcon} alt='Jest' />
            <ReduxIcon />
            <ApolloIcon />
            <img src={AngularIcon} alt='Angular' />
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              width: 71.75rem;
              animation: ${slide} 30s linear alternate-reverse both infinite;

              @media (max-width: 900px) {
                animation: ${slide1} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 800px) {
                animation: ${slide2} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 700px) {
                animation: ${slide3} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 600px) {
                animation: ${slide4} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 500px) {
                animation: ${slide5} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 400px) {
                animation: ${slide6} 30s linear alternate-reverse both infinite;
              }
            `}
          >
            <img src={TsIcon} alt='Typescript' />
            <img src={JsIcon} alt='Javascript' />
            <img src={ParcelIcon} alt='ParcelJS' />
            <GatsbyIcon />
            <img src={ReactIcon} alt='ReactJS' />
            <img src={GraphQLIcon} alt='GraphlQL' />
            <img src={SassIcon} alt='SASS' />
            <NodejsIcon />
          </div>
        </div>
      </Container>
    </section>
  );
}
