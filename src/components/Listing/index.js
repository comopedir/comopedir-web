import React from "react"
import styled from "styled-components"

import ListingItem from "./ListingItem"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"

const StyledItemContainer = styled.div`
  width: calc((100% - (2.8rem * 3)) / 4);
  display: flex;
  align-items: flex-start;

  &:nth-child(n + 5) {
    margin-top: 5.6rem;
  }

  ${mediaQuery[breakpoints.small]} {
    width: calc((100% - 1.6rem) / 2);
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Listing = ({ items = [] }) => (
  <StyledContainer>
    {items.map(item => (
      <StyledItemContainer>
        <ListingItem {...item} />
      </StyledItemContainer>
    ))}
  </StyledContainer>
)

export default Listing
