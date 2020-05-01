import React from "react"
import styled from "styled-components"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"

export const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
}

const getStyledTag = tag => styled[tag]`
  font-size: ${({ size }) => {
    switch (size) {
      case sizes.small: {
        return "1.2rem"
      }
      case sizes.medium: {
        return "1.4rem"
      }
      case sizes.large: {
        return "2.4rem"
      }
      default: {
        return null
      }
    }
  }};
  ${mediaQuery[breakpoints.large]} {
    font-size: ${({ size }) => {
      switch (size) {
        case sizes.small: {
          return "1.4rem"
        }
        case sizes.medium: {
          return "1.8rem"
        }
        case sizes.large: {
          return "3.2rem"
        }
        default: {
          return null
        }
      }
    }};
  }
`

const Text = ({ tag = "p", className, size = sizes.medium, children }) => {
  const StyledTag = getStyledTag(tag)
  return (
    <StyledTag className={className} size={size}>
      {children}
    </StyledTag>
  )
}

export default Text
