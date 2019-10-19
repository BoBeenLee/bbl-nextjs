import { graphql } from "gatsby";
import React, { PureComponent } from "react";

// http://resume.github.io/?bobinlee

class GithubPage extends PureComponent {
  public render() {
    return <div>Hello World</div>;
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
              memberStatuses {
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
          repositoriesContributedTo {
            nodes {
              id
              name
              url
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
