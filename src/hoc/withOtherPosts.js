import React, { Component } from 'react';
import { requests } from '../apis/graphqlApis';
import { query, mapToPosts } from '../graphql/queries/post';

const withOtherPosts = (TargetComponent) => {
  return class WithOtherPosts extends Component {
    static propTypes = {};

    static defaultProps = {};
    state = {
      otherPosts: [],
    };

    async componentDidMount() {
      const res = await requests.query(query);
      this.setState(() => ({ otherPosts: mapToPosts(res) }));
    }

    render() {
      const { otherPosts } = this.state;
      return (
        <TargetComponent {...this.props} otherPosts={otherPosts} />
      );
    }
  };
}

export default withOtherPosts;
