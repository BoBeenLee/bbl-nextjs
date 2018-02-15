import React, { Component } from "react";
import PropTypes from 'prop-types';
import Link from "gatsby-link";

class PostPage extends Component {
  render() {
    const { allMarkdownRemark } = this.props.data;
  
    return (
      <ul>
        {allMarkdownRemark.edges.map(post => (
          <li>
            <Link key={post.node.id} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export const query = graphql`
  query AllMarkdownQuery {
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
  }
`;

export default PostPage;
