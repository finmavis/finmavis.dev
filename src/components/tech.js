import React from 'react';
import { css } from '@emotion/core';

import Container from './container';

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
import NpmIcon from '../assets/svg/npm.svg';
import ParcelIcon from '../assets/svg/parceljs.svg';
import ReactIcon from '../assets/svg/reactjs.svg';
import ReduxIcon from '../assets/svg/redux.svg';
import SassIcon from '../assets/svg/sass.svg';
import TsIcon from '../assets/svg/typescript.svg';
import WebpackIcon from '../assets/svg/webpack.svg';
import YarnIcon from '../assets/svg/yarn.svg';

export default function Tech() {
  return (
    <div
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container>
        <h2
          css={css`
            display: block;
            color: var(--color-primary);
            text-align: center;
            margin-bottom: 2rem;
          `}
        >
          Technologies
        </h2>
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
          <HtmlIcon />
          <AngularIcon />
          <ApolloIcon />
          <BabelIcon />
          <CssIcon />
          <GatsbyIcon />
          <GraphQLIcon />
          <JsIcon />
          <JestIcon />
          <NodejsIcon />
          <NpmIcon />
          <ParcelIcon />
          <ReactIcon />
          <ReduxIcon />
          <SassIcon />
          <TsIcon />
          <WebpackIcon />
          <YarnIcon />
        </div>
      </Container>
    </div>
  );
}
