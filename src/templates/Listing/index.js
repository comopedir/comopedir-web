import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { pageNameByLocation } from "../../../node-src/helpers"
import styled from "styled-components"
import Layout from "../../components/Layout"
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
  const [city, setCity] = useState(selectedCity)

  useEffect(() => {
    if (city !== selectedCity || state !== selectedState) {
      navigate(
        pageNameByLocation(
          state,
          locations[state].findIndex(c => c === city) === -1
            ? locations[state][0]
            : city
        )
      )
    }
  }, [city, state, locations, selectedCity, selectedState])

  return (
    <Layout heading="Como pedir de todos os lugares que você gosta e quer ajudar.">
      {locations && (
        <StyledLocationFilters>
          <LocationFilter
            options={locations[state]}
            selected={city}
            onChange={e => {
              setCity(e.target.value)
            }}
          />
          <StyledStateFilter>
            <LocationFilter
              options={Object.keys(locations)}
              selected={state}
              onChange={e => setState(e.target.value)}
            />
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
