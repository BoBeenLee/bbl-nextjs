import _ from "lodash";
import React, { Component } from "react";
import styled from "styled-components";
import feednami from "../apis/feednami";
import { isBrowser } from "../utils/navigator";

// tslint:disable:object-literal-sort-keys
const withTistory = TargetComponent => {
  return class WithTistory extends Component {
    public static propTypes = {};

    public static defaultProps = {};

    public state = {
      tistory: []
    };

    public componentDidMount() {
      const rssUrl = "http://cultist-tp.tistory.com/rss";

      if (isBrowser) {
        (feednami as any).load(rssUrl, res => {
          const tistory = _.map(res.feed.entries, article => ({
            guid: article.guid,
            title: article.title,
            link: article.link,
            date: new Date(article.date),
            description: article.description,
            showDetails: false
          }));
          this.setState({ tistory });
        });
      }
    }

    public render() {
      return <TargetComponent tistory={this.state.tistory} {...this.props} />;
    }
  };
};

export default withTistory;
