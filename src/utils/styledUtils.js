import { css } from "styled-components"

export const devices = {
    sm: (...args ) => css`
        @media (min-width: 576px) {
        ${css(...args)};
  }`,
    md: (...args ) => css`
        @media (min-width: 992px) {
        ${css(...args)};
  }`,
    lg: (...args ) => css`
        @media (min-width: 992px) {
        ${css(...args)};
  }`,
    xl: (...args ) => css`
    @media (min-width: 1200px) {
        ${css(...args)};
  } `
}