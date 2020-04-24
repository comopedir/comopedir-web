import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Text, { sizes } from "../../Text"
import { gray } from "../../../styles/colors"
import { mediaQuery, breakpoints } from "../../../styles/breakpoints"

const StyledName = styled(Text)`
  margin-top: 1rem;
  :hover > & {
    text-decoration: underline;
  }
`

const StyledCategory = styled(Text)`
  margin-top: 0.3rem;
  color: ${gray};
`

const StyledImageContainer = styled.div`
  width: 29rem;
  height: 36rem;
  position: relative;
  overflow: hidden;
  display: inline-flex;

  ${mediaQuery[breakpoints.small]} {
    width: 15.6rem;
    height: 20rem;
  }
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
`

const ListingItem = ({ url, image, name, category }) => (
  <Link to={url}>
    <StyledImageContainer>
      <StyledImage src={image} />
    </StyledImageContainer>
    <StyledName size={sizes.medium}>{name}</StyledName>
    <StyledCategory size={sizes.medium}>{category}</StyledCategory>
  </Link>
)

export default ListingItem
