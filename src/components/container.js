import React from 'react';
import { css } from '@emotion/core';

export default function Container({ children, ...props }) {
  return (
    <div
      css={css`
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        padding-left: 15px;
        padding-right: 15px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}
