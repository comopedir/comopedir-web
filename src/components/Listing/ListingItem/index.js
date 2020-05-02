import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Text, { sizes } from "../../Text"
import { gray } from "../../../styles/colors"
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
