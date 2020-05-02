import React from "react"
import styled from "styled-components"
import Text, { sizes } from "../../Text"
import { gray } from "../../../styles/colors"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const StyledText = styled(Text)`
  color: ${gray};

  &:not(:first-child) {
    margin-top: 0.4rem;
  }
`

const Address = ({ className, address = {} }) => {
  const firstLine = [address.street, address.number, address.complement]
    .filter(Boolean)
    .join(", ")
  const secondLine = [address.district, `${address.city} - ${address.state}`]
    .filter(Boolean)
    .join(", ")
  return (
    <StyledContainer className={className}>
      {firstLine ? (
        <StyledText size={sizes.medium}>{firstLine}</StyledText>
      ) : null}
      <StyledText size={sizes.medium}>{secondLine}</StyledText>
    </StyledContainer>
  )
}

export default Address
