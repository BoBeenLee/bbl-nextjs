/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from "styled-components";

const sizes = {
  desktop: 1220,
  mobile: 767
};

export const media = {
  desktop: (first: any, ...args: any[]) => css`
    @media (min-width: 1220px) {
      ${css(first, ...args)};
    }
  `,
  mobile: (first: any, ...args: any[]) => css`
    @media (max-width: 767px) {
      ${css(first, ...args)};
    }
  `
};

/*
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
*/
