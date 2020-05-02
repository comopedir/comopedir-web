import React from "react"
import styled from "styled-components"
import Text, { sizes } from "../../Text"
import { breakpoints, mediaQuery } from "../../../styles/breakpoints"
import { gray } from "../../../styles/colors"

const Image = styled.img`
  border-radius: 50%;

  height: 7.2rem;
  width: 7.2rem;

  ${mediaQuery[breakpoints.large]} {
    height: 11rem;
    width: 11rem;
  }
`

const Title = styled(Text)`
  margin-top: 0.9rem;

  ${mediaQuery[breakpoints.large]} {
    margin-top: 1.7rem;
  }
`

const Category = styled(Text)`
  margin-top: 0.4rem;
  color: ${gray};
`

const BusinessHeader = ({ title, image, category, className }) => (
  <div className={className}>
    <Image src={image.url} />
    <Title size={sizes.large} tag="h1">
      {title}
    </Title>
    <Category size={sizes.large} tag="h2">
      {category}
    </Category>
  </div>
)

export default BusinessHeader
