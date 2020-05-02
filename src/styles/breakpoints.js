import { breakpointLarge } from "./variables"

export const breakpoints = {
  small: "small",
  large: "large",
}

export const mediaQuery = {
  [breakpoints.small]: `@media (max-width: ${breakpointLarge - 1}px)`,
  [breakpoints.large]: `@media (min-width: ${breakpointLarge}px)`,
}
