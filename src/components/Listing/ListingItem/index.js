import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Text, { sizes } from "../../Text"
import { gray } from "../../../styles/colors"
import { mediaQuery, breakpoints } from "../../../styles/breakpoints"
import Image from "../../Image"

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

const ListingItem = ({ slug, pictures, name, categories, className }) => (
  <StyledLink to={`/${slug}`} className={className}>
    {pictures && pictures[0] && (
      <Image
        src={pictures[0].small.url}
        aspectRatio={{ small: "78%", large: "124%" }}
      />
    )}
    <StyledName size={sizes.medium}>{name}</StyledName>
    {categories && categories[0] && (
      <StyledCategory size={sizes.medium}>{categories[0].slug}</StyledCategory>
    )}
  </StyledLink>
)

export default ListingItem
