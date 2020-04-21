const path = require("path")
const { pageNameByLocation } = require("./node-src/helpers")
const {
  homeQueryFields,
  businessesQuery,
  categoryQuery,
} = require("./node-src/queries")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get all businesses
  const businessesPromise = graphql(businessesQuery).then(result => {
    const businesses = result.data.comopedir.businesses.edges || []
    // Create pages for each business
    businesses.forEach(({ node = {} }) => {
      if (node.slug) {
        createPage({
          path: node.slug,
          component: path.resolve("./src/templates/Restaurant/index.js"),
          context: {
            data: node,
          },
        })
      }
    })
    return businesses
  })

  // Get all categories
  const categoriesPromise = graphql(categoryQuery).then(result =>
    (result.data.comopedir.categories.edges || []).map(
      ({ node = {} }) => node.slug
    )
  )

  const [businesses, categories] = await Promise.all([
    businessesPromise,
    categoriesPromise,
  ])

  // Get all locations from the businesses
  const locations = businesses.reduce((accum, { node = {} }) => {
    const { addresses } = node
    addresses.forEach((address = {}) => {
      const { city, state } = address
      if (!accum[state]) {
        accum[state] = [city]
      } else if (!accum[state].includes(city)) {
        accum[state].push(city)
      }
    })
    return accum
  }, {})

  // Get businesses for every category in every city in every state.
  const businessFilteredPromise = Promise.all(
    Object.keys(locations).map(state =>
      Promise.all(
        locations[state].map(city =>
          Promise.all([
            // Create root page for each city and state with all categories.
            graphql(`
            query {
              comopedir {
                businesses(city: "${city}", state: "${state}") {
                  ${homeQueryFields}
                }
              }
            }
            `).then(result => {
              const businessesFiltered =
                (result.data.comopedir.businesses &&
                  result.data.comopedir.businesses.edges) ||
                []
              return createPage(
                getHomePageParams({
                  state,
                  city,
                  businessesFiltered,
                })
              )
            }),
            categories.map(category =>
              graphql(`
        query {
          comopedir {
            businesses(city: "${city}", state: "${state}", category: "${category}") {
              ${homeQueryFields}
            }
          }
        }
      `).then(result => {
                const businessesFiltered =
                  (result.data.comopedir.businesses &&
                    result.data.comopedir.businesses.edges) ||
                  []
                return createPage(
                  getHomePageParams({
                    state,
                    city,
                    category,
                    businessesFiltered,
                  })
                )
              })
            ),
          ])
        )
      )
    )
  )

  return businessFilteredPromise
}

// Generate page params for createPage for HomePage
const getHomePageParams = ({ state, city, category = "", data }) => ({
  path: `${pageNameByLocation(state, city)}/${category}`,
  component: path.resolve("./src/templates/Restaurant/index.js"),
  context: {
    data,
  },
})
