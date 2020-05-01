import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../../styles/global"
import Header from "../Header"
import Footer from "../Footer"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"

const StyledContainer = styled.div`
  margin: 2.4rem 2.4rem 6.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQuery[breakpoints.large]} {
    margin: 9.3rem 9.7rem 14.9rem;
  }
`

export default ({ children, heading }) => (
  <React.Fragment>
    <GlobalStyle />
    <StyledContainer>
      <Header heading={heading} />
      {children}
      <Footer />
    </StyledContainer>
  </React.Fragment>
)
