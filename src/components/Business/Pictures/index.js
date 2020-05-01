import React from "react"
import styled from "styled-components"
import Image from "../../Image"
import { mediaQuery, breakpoints } from "../../../styles/breakpoints"

const StyledContainer = styled.div`
  display: flex;

  ${mediaQuery[breakpoints.large]} {
    flex-direction: column;
  }
`

const StyledImage = styled(Image)`
  ${mediaQuery[breakpoints.small]} {
    :not(:last-child) {
      margin-right: 1rem;
    }

    min-width: 327px;
  }

  ${mediaQuery[breakpoints.large]} {
    :not(:first-child) {
      margin-top: 3rem;
    }

    min-width: 820px;
  }
`

const Pictures = ({ pictures }) => (
  <StyledContainer>
    {pictures &&
      pictures.map(p => (
        <StyledImage
          src={p.large.url}
          aspectRatio={{ small: "61%", large: "56%" }}
        ></StyledImage>
      ))}
  </StyledContainer>
)

export default Pictures
