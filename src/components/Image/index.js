import React from "react"
import styled from "styled-components"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"

const StyledImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-flex;

  &::after {
    display: block;
    width: 100%;
    padding-top: ${({ aspectRatio }) => aspectRatio.small};
    content: "";

    ${mediaQuery[breakpoints.large]} {
      padding-top: ${({ aspectRatio }) => aspectRatio.large};
    }
  }
`

const StyledBoxRatioContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

/* To get the correct aspect ratio do: height / width * 100% */
const Image = ({
  src,
  aspectRatio = { small: "78%", large: "124%" },
  className,
}) => (
  <StyledImageContainer aspectRatio={aspectRatio} className={className}>
    <StyledBoxRatioContainer>
      <StyledImage src={src} />
    </StyledBoxRatioContainer>
  </StyledImageContainer>
)

export default Image
