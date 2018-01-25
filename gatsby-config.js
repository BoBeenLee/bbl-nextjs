
const test = `
query {
  repository(owner:"torvalds",name:"linux"){
    description
  }
}
`;

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
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
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.TOKEN,
        variables: {
          "user": "BoBinLee",
          "count": 100
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
