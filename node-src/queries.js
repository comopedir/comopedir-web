const homeQueryFields = `
edges {
  node {
    name
    slug
    addresses {
      city
      state
    }
  }
}
`

const categoryQuery = `
query {
  comopedir {
    categories {
      edges {
        node {
          slug
        }
      }
    }
  }
}
`

const businessesQuery = `
query {
  comopedir {
    businesses {
      edges {
        node {
          name
          slug
          addresses {
            city
            state
          }
					categories {
            slug
          }
          pictures {
            small {
              url
            }
            large {
              url
            }
          }
        }
      }
    }
  }
}
`

module.exports = {
  homeQueryFields,
  categoryQuery,
  businessesQuery,
}
