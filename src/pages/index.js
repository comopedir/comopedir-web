import React from "react"
import { graphql } from "gatsby"

const Index = () => <div>Hello World from Comopedir</div>

export default Index

export const query = graphql`
  query {
    comopedir {
      businesses {
        edges {
          node {
            id
            slug
            name
            categories {
              slug
            }
            pictures {
              small {
                id
                url
                size
                width
                height
              }
            }
          }
        }
      }
    }
  }
`
