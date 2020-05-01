import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import LocationFilter from "../../components/Listing/LocationFilter"
import CategoryFilter from "../../components/Listing/CategoryFilter"
import ListingGrid from "../../components/Listing/index"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"

const StyledStateFilter = styled.div`
  margin-left: 2rem;
`

const StyledLocationFilters = styled.div`
  display: flex;
  margin-top: 8.7rem;

  ${mediaQuery[breakpoints.large]} {
    margin-top: 9.6rem;
  }
`

const StyledCategoryFilter = styled.div`
  margin-top: 8.1rem;

  ${mediaQuery[breakpoints.large]} {
    margin-top: 11.8rem;
  }
`

const StyledListingGrid = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 20.8rem;

  ${mediaQuery[breakpoints.large]} {
    margin-top: 2.2rem;
    margin-bottom: 23rem;
  }
`

const Listing = ({ pageContext = {} }) => {
  const {
    locations,
    selectedState = "SP",
    selectedCity = "São Paulo",
    selectedCategory,
    categories,
    businesses,
  } = pageContext
  const [state, setState] = useState(selectedState)

  return (
    <Layout heading="Como pedir de todos os lugares que você gosta e quer ajudar.">
      {locations && (
        <StyledLocationFilters>
          <LocationFilter
            options={locations[state]}
            selected={locations[state][0]}
          />
          <StyledStateFilter>
            <LocationFilter options={Object.keys(locations)} selected={state} />
          </StyledStateFilter>
        </StyledLocationFilters>
      )}
      {categories && (
        <StyledCategoryFilter>
          <CategoryFilter
            options={categories}
            selected={selectedCategory || "Filtrar"}
          />
        </StyledCategoryFilter>
      )}
      {businesses && (
        <StyledListingGrid>
          <ListingGrid items={businesses} />
        </StyledListingGrid>
      )}
    </Layout>
  )
}

export default Listing
