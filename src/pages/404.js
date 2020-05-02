import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Text, { sizes } from "../components/Text"

const StyledTextContainer = styled(Text)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFound = () => (
  <Layout heading="Como pedir">
    <StyledTextContainer>
      <Text size={sizes.large}>Página não encontrada :(</Text>
    </StyledTextContainer>
  </Layout>
)

export default NotFound
