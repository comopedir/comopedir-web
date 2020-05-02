import React, { useState, useEffect, useMemo } from "react"
import { navigate } from "gatsby"
import { pageNameByLocation } from "../../../node-src/helpers"
import styled from "styled-components"
import Layout from "../../components/Layout"
import LocationFilter from "../../components/Listing/LocationFilter"
import CategoryFilter from "../../components/Listing/CategoryFilter"
import ListingGrid from "../../components/Listing/index"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"
import Text, { sizes } from "../../components/Text"

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
  margin-top: ${({ hasNewest }) => (hasNewest ? "8.1rem" : "2rem")};

  ${mediaQuery[breakpoints.large]} {
    margin-top: ${({ hasNewest }) => (hasNewest ? "11.8rem" : "3rem")};
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

const StyledNewestTitle = styled(Text)`
  margin-bottom: 1.4rem;

  ${mediaQuery[breakpoints.large]} {
    margin-bottom: 2.2rem;
  }
`

const StyledNewestListing = styled.div`
  margin-top: 5rem;

  ${mediaQuery[breakpoints.large]} {
    margin-bottom: 6rem;
  }
`

const StyledNoResults = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQuery[breakpoints.large]} {
    justify-content: flex-start;
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
  const [category, setCategory] = useState(selectedCategory)

  useEffect(() => {
    if (
      city !== selectedCity ||
      state !== selectedState ||
      category !== selectedCategory
    ) {
      navigate(
        [
          pageNameByLocation(
            state,
            locations[state].findIndex(c => c === city) === -1
              ? locations[state][0]
              : city
          ),
          category,
        ]
          .filter(Boolean)
          .join("/")
      )
    }
  }, [
    city,
    state,
    locations,
    selectedCity,
    selectedState,
    category,
    selectedCategory,
  ])

  const newest = useMemo(
    () =>
      businesses
        .sort(
          (a, b) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        )
        .slice(0, 4),
    [businesses]
  )

  const hasNewest = useMemo(() => newest && newest.length, [newest])
  const hasBusinesses = useMemo(() => businesses && businesses.length, [
    businesses,
  ])

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
      {hasNewest ? (
        <StyledNewestListing>
          <StyledNewestTitle size={sizes.medium}>
            Últimas Novidades
          </StyledNewestTitle>
          <ListingGrid items={newest} />
        </StyledNewestListing>
      ) : null}
      {categories && (
        <StyledCategoryFilter hasNewest={hasNewest}>
          <CategoryFilter
            options={categories}
            selected={selectedCategory || "Filtrar"}
            onChange={e => setCategory(e.target.value)}
          />
        </StyledCategoryFilter>
      )}
      {hasBusinesses ? (
        <StyledListingGrid>
          <ListingGrid items={businesses} />
        </StyledListingGrid>
      ) : (
        <StyledNoResults>
          <Text size={sizes.large}>Não encontramos resultados</Text>
        </StyledNoResults>
      )}
    </Layout>
  )
}

export default Listing
