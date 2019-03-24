/*
const test = `
query {
  repository(owner:"torvalds",name:"linux"){
    description
  }
}
`; */

const config = require('./config/SiteConfig');

module.exports = {
  siteMetadata: {
    title: 'BoBeen Lee',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-114339461-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BoBeen Lee',
        short_name: 'BoBeen Lee',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GITHUB_TOKEN,
        variables: {
          user: 'BoBinLee',
          count: 100,
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
                members {
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
        }`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    }
  ],
};
