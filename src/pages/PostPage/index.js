import React, { Component } from "react";
import PropTypes from 'prop-types';
import Link from "gatsby-link";

class PostPage extends Component {
    static propTypes = {
        allMarkdownRemark: PropTypes.object
    }
  render() {
    const { allMarkdownRemark } = this.props;
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

export default PostPage;
