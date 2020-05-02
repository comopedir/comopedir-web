import React from "react"
import styled from "styled-components"
import { mediaQuery, breakpoints } from "../../../../styles/breakpoints"
import Text, { sizes } from "../../../Text"
import { grayLight, gray } from "../../../../styles/colors"
import { Link } from "gatsby"

const StyledLink = styled.a`
  border-top: 1px solid ${grayLight};
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery[breakpoints.large]} {
    padding-top: 0.8rem;
  }
`

const StyledService = styled(Text)`
  color: ${gray};
`

const ChannelItem = ({ label, to, services, className }) => (
  <StyledLink href={to} className={className}>
    <Text size={sizes.medium}>{label}</Text>
    {services ? (
      <StyledService size={sizes.small}>{services.join(", ")}</StyledService>
    ) : null}
  </StyledLink>
)

export default ChannelItem
