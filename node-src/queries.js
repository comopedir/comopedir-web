const homeQueryFields = `
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
    channels {
      value
      channel {
        name
        slug
      }
    }
    createdAt
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
      ${homeQueryFields}
      }
    }
}
`

module.exports = {
  homeQueryFields,
  categoryQuery,
  businessesQuery,
}
