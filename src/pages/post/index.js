import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import _ from "lodash";
import { PostCard } from "../../components/Card";

const Root = styled.div`
  padding-top: 20px;
`;

class PostPage extends Component {
  render() {
    const { allMarkdownRemark } = this.props.data;
    const posts = allMarkdownRemark.edges;
    return <Root>{_.map(posts, this._renderPostItem)}</Root>;
  }
  _renderPostItem = ({ node }) => {
    const { id, frontmatter: { title, path } } = node;
    return <PostCard key={id} url={path} title={title} />;
  };
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
