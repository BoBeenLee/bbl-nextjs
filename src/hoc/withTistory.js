import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { isBrowser } from '../utils/NavigatorUtils';
import feednami from '../apis/feednami';

function withTistory(TargetComponent) {
  return class WithTistory extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
      tistory: []
    };

    componentDidMount() {
      const rssUrl = "http://cultist-tp.tistory.com/rss";

      isBrowser && feednami.load(rssUrl, res => {
        const tistory = _.map(res.feed.entries, article => {
          return {
            guid: article.guid,
            title: article.title,
            link: article.link,
            date: new Date(article.date),
            description: article.description,
            showDetails: false
          };
        });
        this.setState({ tistory });
      });
    }

    render() {
      return (
        <TargetComponent tistory={this.state.tistory} {...this.props} />
      );
    }
  };
}

export default withTistory;
