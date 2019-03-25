import React, { Component, PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import _ from 'lodash';
import { PostCard } from '../../components/Card';
import { withTistory, withOtherPosts } from '../../hoc';
import Layout from "../../components/Layout";

const Root = styled.div`
  padding-top: 20px;
`;

class PostPage extends PureComponent<any> {
  _mapOtherToPosts = () => {
    const { otherPosts } = this.props;
    return _.map(otherPosts, item => ({
      id: item.url,
      title: item.title,
      linkUrl: item.url,
      date: new Date(item.date),
    }));
  }

  _mapRemarkToPosts = () => {
    const { allMarkdownRemark } = this.props.data;
    const posts = allMarkdownRemark.edges;
    return _.map(posts, ({ node }) => {
      const { id, fields: { slug }, frontmatter: { title, date } } = node;
      return {
        id,
        title,
        url: slug,
        date: new Date(date),
      };
    });
  };

  _mapTistoryToPosts = () => {
    const { tistory = [] } = this.props;
    return _.map(tistory, item => ({
      id: item.guid,
      title: item.title,
      linkUrl: item.link,
      date: item.date,
    }));
  };

  render() {
    const posts = [...this._mapOtherToPosts(),
    ...this._mapTistoryToPosts(),
    ...this._mapRemarkToPosts()];
    const postsByDESC = _.orderBy(posts, ['date'], ['desc']);

    return (
      <Layout pathname={this.props.location.pathname}>
        <Root>
          {_.map(postsByDESC, item => <PostCard key={item.id} {...item} />)}
        </Root>
      </Layout>
    );
  }
}

// eslint-disable-next-line no-undef
export const query = graphql`
  query AllMarkdownQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default withOtherPosts(withTistory(PostPage));
