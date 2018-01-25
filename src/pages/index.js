import React from "react";
import Link from "gatsby-link";
import PostPage from "./PostPage";

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
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

/**
 * languages {
    nodes {
      name
      color
    }
  }
 */

const IndexPage = ({ data }) => {
  console.log(data);
  const { allMarkdownRemark, githubData } = data;
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <h2>Index</h2>
      <PostPage allMarkdownRemark={allMarkdownRemark} />
    </div>
  );
};

export default IndexPage;
