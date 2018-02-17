/*
const test = `
query {
  repository(owner:"torvalds",name:"linux"){
    description
  }
}
`;*/

module.exports = {
  siteMetadata: {
    title: "BoBeen Lee"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
        path: `${__dirname}/src/pages/images`,
        name: "images"
      }
    },
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114339461-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true
      }
    },
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.GITHUB_TOKEN,
        variables: {
          user: "BoBinLee",
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
            contributedRepositories(first: $count, orderBy: { field: UPDATED_AT, direction: DESC }) {
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
    }
  ]
};
