import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import BusinessHeader from "../../components/Business/Header"
import Channels from "../../components/Business/Channels"
import Pictures from "../../components/Business/Pictures"
import {
  layoutHorizontalMarginSmall,
  layoutHorizontalMarginLarge,
} from "../../styles/variables"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"

const StyledPictures = styled(Pictures)`
  ${mediaQuery[breakpoints.small]} {
    margin: 2.4rem -${layoutHorizontalMarginSmall} 0;

    & > div:first-child {
      margin-left: ${layoutHorizontalMarginSmall};
    }
  }

  ${mediaQuery[breakpoints.large]} {
    margin-top: 13.9rem;
  }
`

const StyledChannelsMobile = styled(Channels)`
  margin: 2.4rem 0 14rem;

  ${mediaQuery[breakpoints.large]} {
    display: none;
  }
`

const StyledChannelsDesktop = styled(Channels)`
  margin-top: 2.5rem;

  ${mediaQuery[breakpoints.small]} {
    display: none;
  }
`

const StyledHeader = styled(BusinessHeader)``

const StyledContainer = styled.div`
  margin-top: 2.7rem;

  ${mediaQuery[breakpoints.large]} {
    grid-gap: 6.7rem;
    display: grid;
    grid-template-columns: minmax(35.8rem, 1fr) minmax(82rem, 1fr);
    margin-top: 4.3rem;
    margin-bottom: 8.5rem;
  }
`

const RestaurantTemplate = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <Layout>
      <StyledContainer>
        <div>
          <StyledHeader
            title={data.name}
            image={
              (data.pictures && data.pictures[0] && data.pictures[0].small) ||
              {}
            }
            category={
              data.categories && data.categories[0] && data.categories[0].slug
            }
          />
          <StyledChannelsDesktop channels={data.channels} />
        </div>
        <StyledPictures pictures={data.pictures} />
        <StyledChannelsMobile channels={data.channels} />
      </StyledContainer>
    </Layout>
  )
}

export default RestaurantTemplate
