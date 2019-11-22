import React from 'react';
import { css } from '@emotion/core';

import Container from './container';
import HeadingSection from './heading-section';

import AngularIcon from '../assets/svg/angular.svg';
import ApolloIcon from '../assets/svg/apollo.svg';
import BabelIcon from '../assets/svg/babel.svg';
import CssIcon from '../assets/svg/css.svg';
import GatsbyIcon from '../assets/svg/gatsbyjs.svg';
import GraphQLIcon from '../assets/svg/graphql.svg';
import HtmlIcon from '../assets/svg/html.svg';
import JsIcon from '../assets/svg/javascript.svg';
import JestIcon from '../assets/svg/jest.svg';
import NodejsIcon from '../assets/svg/nodejs.svg';
import ParcelIcon from '../assets/svg/parceljs.svg';
import ReactIcon from '../assets/svg/reactjs.svg';
import ReduxIcon from '../assets/svg/redux.svg';
import SassIcon from '../assets/svg/sass.svg';
import TsIcon from '../assets/svg/typescript.svg';
import WebpackIcon from '../assets/svg/webpack.svg';

export default function Tech() {
  return (
    <div
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container>
        <HeadingSection>Technologies</HeadingSection>
        <div
          css={css`
            svg {
              height: 5rem;

              .icon-label {
                fill: var(--color-primary);
              }
            }
          `}
        >
          <img
            src={HtmlIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={CssIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={JsIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={TsIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />

          <img
            src={SassIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />

          {/* <hr /> */}

          <img
            src={BabelIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={JestIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={WebpackIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={ParcelIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />

          {/* <hr /> */}

          <img
            src={AngularIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={ApolloIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />

          <img
            src={GatsbyIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />

          <img
            src={NodejsIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={ReactIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={ReduxIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
          <img
            src={GraphQLIcon}
            alt='Tes'
            css={css`
              display: inline-block;
              height: 5rem;
            `}
          />
        </div>
      </Container>
    </div>
  );
}
