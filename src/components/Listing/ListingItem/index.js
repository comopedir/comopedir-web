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
  position: relative;
  overflow: hidden;
  display: inline-flex;
  width: 100%;
  height: 100%;

  &::after {
    display: block;
    padding-top: calc(156 / 200 * 100%);
    content: "";

    ${mediaQuery[breakpoints.large]} {
      padding-top: 124%;
    }
  }
`

const StyledBoxRatioContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`

const ListingItem = ({ url, image, name, category, className }) => (
  <StyledLink to={url} className={className}>
    <StyledImageContainer>
      <StyledBoxRatioContainer>
        <StyledImage src={image} />
      </StyledBoxRatioContainer>
    </StyledImageContainer>
    <StyledName size={sizes.medium}>{name}</StyledName>
    <StyledCategory size={sizes.medium}>{category}</StyledCategory>
  </StyledLink>
)

export default ListingItem
