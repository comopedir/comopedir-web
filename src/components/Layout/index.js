import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../../styles/global"
import Header from "../Header"
import Footer from "../Footer"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"
import {
  layoutHorizontalMarginSmall,
  layoutHorizontalMarginLarge,
} from "../../styles/variables"

const StyledContainer = styled.div`
  margin: 2.4rem ${layoutHorizontalMarginSmall} 6.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQuery[breakpoints.large]} {
    margin: 9.3rem ${layoutHorizontalMarginLarge} 14.9rem;
  }
`

export default ({ children, heading, background }) => (
  <React.Fragment>
    <GlobalStyle background={background} />
    <StyledContainer>
      <Header heading={heading} />
      {children}
      <Footer />
    </StyledContainer>
  </React.Fragment>
)
