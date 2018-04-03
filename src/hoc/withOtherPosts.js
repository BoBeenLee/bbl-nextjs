import React, { Component } from 'react';
import { requests } from '../apis/graphqlApis';
import { query, mapToPosts } from '../graphql/queries/post';

function withOtherPosts(TargetComponent) {
  return class WithOtherPosts extends Component {
        static propTypes = {};

        static defaultProps = {};
        state = {
          otherPosts: [],
        };

        componentDidMount() {
          requests.query(query).then((res) => {
            this.setState({ otherPosts: mapToPosts(res) });
          });
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
