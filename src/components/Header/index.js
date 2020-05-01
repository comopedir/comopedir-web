import React from "react"
import styled from "styled-components"

import Text, { sizes } from "../Text"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"
import sumIcon from "../../assets/icons/sum.svg"

const StyledTitle = styled(Text)`
  white-space: pre-line;
  width: 100%;

  ${mediaQuery[breakpoints.large]} {
    width: 25%;
  }
`

const StyledFormLinkText = styled(Text)`
  line-height: 1.5;
  ${mediaQuery[breakpoints.small]} {
    display: none;
  }
`

const StyledIcon = styled.img`
  ${mediaQuery[breakpoints.large]} {
    width: 1.8rem;
    height: 1.8 rem;
  }
  ${mediaQuery[breakpoints.small]} {
    margin-left: 0;
  }
  margin-left: 1.6rem;
  width: 2rem;
  height: 2rem;
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Header = ({ className, heading = "Como pedir" }) => (
  <StyledContainer className={className}>
    <StyledTitle size={sizes.large} tag="h1">
      {heading}
    </StyledTitle>
    <StyledLink href="/">
      <StyledFormLinkText size={sizes.medium} tag="p">
        Crie sua página
      </StyledFormLinkText>
      <StyledIcon alt="Ícone de mais" src={sumIcon} />
    </StyledLink>
  </StyledContainer>
)

export default Header
