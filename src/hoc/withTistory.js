import React, { Component } from 'react';
import styled from "styled-components";
import feednami from './feednami';
import PropTypes from 'prop-types';

function withTistory(TargetComponent) {
  return class WithTistory extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
        tistory: []
    };

    componentDidMount() {
        const rssUrl = "http://cultist-tp.tistory.com/rss";
        feednami.load(rssUrl, res => {
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
          <TargetComponent tistory={this.state.tistory} { ...this.props } />
      );
    }
  };
}

export default withTistory;
