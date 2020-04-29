import React from "react"
import styled from "styled-components"

import ListingItem from "./ListingItem"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"

const StyledItemContainer = styled.div`
  display: flex;
  align-items: flex-start;

  ${mediaQuery[breakpoints.small]} {
    grid-column-end: span 1;
  }
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.6rem;
  grid-row-gap: 2.9rem;
  height: 100%;

  ${mediaQuery[breakpoints.large]} {
    grid-gap: 2.8rem;
    grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
    grid-row-gap: 5.6rem;
  }
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
