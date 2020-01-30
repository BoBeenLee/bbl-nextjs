import React, { Component } from "react";
import { requests } from "src/apis/graphqlApis";
import { mapToPosts, query } from "src/graphql/queries/post";

const withOtherPosts = (TargetComponent: any) => {
  return class WithOtherPosts extends Component {
    public static defaultProps = {};
    public state = {
      otherPosts: []
    };

    public async componentDidMount() {
      const res = await requests.query(query);
      this.setState(() => ({ otherPosts: mapToPosts(res) }));
    }

    public render() {
      const { otherPosts } = this.state;
      return <TargetComponent {...this.props} otherPosts={otherPosts} />;
    }
  };
};

export default withOtherPosts;
