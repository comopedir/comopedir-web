import React from "react"
import styled from "styled-components"

import Text, { sizes } from "../Text"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"
import sumIcon from "../../assets/icons/sum.svg"
import { black } from "../../styles/colors"

const StyledTitle = styled(Text)`
  white-space: pre-line;
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
  color: ${black};
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${black};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Header = ({ heading = "Como pedir" }) => (
  <StyledContainer>
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
