require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Como pedir`,
    description: `Como pedir de todos os lugares que você gosta e quer ajudar.`,
    author: `@comopedir`,
    url: `https://comopedir.com.br`,
    image: `src/assets/images/ndfac_ico.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162138553-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `compedir.com.br`,
        start_url: `/`,
        background_color: `#34482b`,
        theme_color: `#34482b`,
        display: `minimal-ui`,
        icon: `src/assets/images/ndfac_ico.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "site.naodeixefecharaconta.com",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "ComoPedir",
        // This is the field under which it's accessible
        fieldName: "comopedir",
        // URL to query from
        url: process.env.API_URL,
      },
    },
  ],
}
