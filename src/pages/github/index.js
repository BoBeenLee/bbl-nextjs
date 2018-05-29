import React, { PureComponent } from 'react';

// http://resume.github.io/?bobinlee

class GithubPage extends PureComponent {
  render() {
    const { data } = this.props;
    return <div />;
  }
}

// eslint-disable-next-line no-undef
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
