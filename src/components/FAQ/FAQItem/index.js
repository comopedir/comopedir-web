import React from "react"
import styled from "styled-components"
import Text, { sizes } from "../../Text"
import { gray } from "../../../styles/colors"
import { mediaQuery, breakpoints } from "../../../styles/breakpoints"

const StyledQuestionContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid ${gray};
  padding-top: 2rem;

  :not(:first-child) {
    margin-top: 7rem;
  }

  ${mediaQuery[breakpoints.large]} {
    padding-top: 2.7rem;

    :not(:first-child) {
      margin-top: 8rem;
    }
  }

  a {
    text-decoration: underline;
  }
`

const StyledAnswer = styled(Text)`
  color: ${gray};
  margin-top: 3.7rem;

  ${mediaQuery[breakpoints.large]} {
    margin-top: 4rem;
  }
`

const FAQItem = ({ question, children }) => (
  <StyledQuestionContainer>
    <Text size={sizes.large}>{question}</Text>
    <StyledAnswer size={sizes.large}>{children}</StyledAnswer>
  </StyledQuestionContainer>
)

export default FAQItem
