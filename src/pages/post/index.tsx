import _ from "lodash";
import React, { PureComponent } from "react";
import styled from "styled-components";

import { PostCard } from "src/components/Card";
import Layout from "src/components/Layout";
import withTistory from "src/hocs/withTistory";

interface IProps {
  data: any;
  tistory: any;
  otherPosts: any;
}

const Root = styled.div`
  padding-top: 20px;
`;

class PostPage extends PureComponent<IProps> {
  public render() {
    const posts = [
      ...this.mapOtherToPosts(),
      ...this.mapTistoryToPosts(),
      ...this.mapRemarkToPosts()
    ];
    const postsByDESC = _.orderBy(posts, ["date"], ["desc"]);

    return (
      <Layout>
        <Root>
          {_.map(postsByDESC, item => (
            <PostCard key={item.id} {...item} />
          ))}
        </Root>
      </Layout>
    );
  }

  private mapRemarkToPosts = () => {
    const { allMarkdownRemark } = this.props.data;
    const posts = allMarkdownRemark.edges;
    return _.map(posts, ({ node }) => {
      const {
        id,
        fields: { slug },
        frontmatter: { title, date }
      } = node;
      return {
        date: new Date(date),
        id,
        title,
        url: slug
      };
    });
  };

  private mapTistoryToPosts = () => {
    const { tistory = [] } = this.props;
    return _.map(tistory, item => ({
      date: item.date,
      id: item.guid,
      linkUrl: item.link,
      title: item.title
    }));
  };

  private mapOtherToPosts = () => {
    const { otherPosts } = this.props;
    return _.map(otherPosts, item => ({
      date: new Date(item.date),
      id: item.url,
      linkUrl: item.url,
      title: item.title
    }));
  };
}

export default withTistory(PostPage);
