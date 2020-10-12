/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const siteMetadata = require("./metadata");

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true // defaults to false
      }
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms"
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-114339461-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        icon: siteMetadata.logo,
        name: "BoBeen Lee",
        display: "minimal-ui"
      }
    },
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: "edcda598e355248f82958f03139c53182d9ca62b",
        variables: {
          user: "BoBeenLee",
          count: 100
        },
        graphQLQuery: `query($user: String = "", $count: Int = 1) {
          user(login: $user) {
            avatarUrl
            email
            location
            followers {
              totalCount
            }
            following {
              totalCount
            }
            organizations(first: 10) {
              nodes {
                avatarUrl
                name
                memberStatuses {
                  totalCount
                }
              }
            }
            repositories(first: $count, orderBy: { field: UPDATED_AT, direction: DESC }) {
              edges {
                 node {
                   id
                   name
                   url
                   languages(first: 1) {
                      nodes {
                       name
                       color
                     }
                   }
                   description
                   updatedAt
                 }
               }
               totalCount
            }
            repositoriesContributedTo(first: $count, orderBy: { field: UPDATED_AT, direction: DESC }) {
              nodes {
                id
                name
                url
                languages(first: 1) {
                  nodes {
                    name
                    color
                  }
                }
                description
                updatedAt
             }
             totalCount
           }
          }
        }`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: []
      }
    }
  ]
};
