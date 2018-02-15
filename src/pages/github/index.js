import React, { Component } from "react";

// http://resume.github.io/?bobinlee

class GithubPage extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return <div />;
  }
}

export const query = graphql`
  query getGithubQuery {
    githubData {
      data {
        user {
          avatarUrl
          email
          location
          followers {
            totalCount
          }
          following {
            totalCount
          }
          organizations {
            nodes {
              avatarUrl
              name
              members {
                totalCount
              }
            }
          }
          repositories {
            edges {
              node {
                id
                name
                url
                description
                updatedAt
              }
            }
            totalCount
          }
          contributedRepositories {
            nodes {
              id
              name
              url
              description
              updatedAt
            }
            totalCount
          }
        }
      }
    }
  }
`;

export default GithubPage;
