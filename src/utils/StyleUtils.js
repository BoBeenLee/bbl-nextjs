import { css } from "styled-components";

const sizes = {
  desktop: 1220,
  mobile: 767
};

export const media = {
  desktop: (...args) => css`
    @media (min-width: 1220px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)};
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

export function truncate(width) {
  return `
      width: ${width};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
}
