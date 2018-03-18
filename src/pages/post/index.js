import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import _ from "lodash";
import { PostCard } from "../../components/Card";
import { withTistory, withOtherPosts } from "../../hoc";

const Root = styled.div`
  padding-top: 20px;
`;

class PostPage extends PureComponent {
  render() {
    const posts = [...this._mapOtherToPosts(), ...this._mapTistoryToPosts(), ...this._mapRemarkToPosts()];
    const postsByDESC = _.orderBy(posts, ["date"], ["desc"]);

    return (
      <Root>
        {_.map(postsByDESC, item => {
          return <PostCard key={item.id} {...item} />;
        })}
      </Root>
    );
  }

  _mapOtherToPosts = () => {
    const { otherPosts } = this.props;
    return _.map(otherPosts, item => {
      return {
        id: item.id,
        title: item.title,
        linkUrl: item.url,
        date: new Date(item.date)
      };
    });
  }

  _mapRemarkToPosts = () => {
    const { allMarkdownRemark } = this.props.data;
    const posts = allMarkdownRemark.edges;
    return _.map(posts, ({ node }) => {
      const { id, frontmatter: { title, path, date } } = node;
      return {
        id,
        title,
        url: path,
        date: new Date(date)
      };
    });
  };

  _mapTistoryToPosts = () => {
    const { tistory = [] } = this.props;
    return _.map(tistory, item => {
      return {
        id: item.guid,
        title: item.title,
        linkUrl: item.link,
        date: item.date
      };
    });
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
            date
          }
        }
      }
    }
  }
`;

export default withOtherPosts(withTistory(PostPage));
