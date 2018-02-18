import React, { Component, PureComponent } from "react";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    opacity: 0.5;
  }
`;

const NameBox = styled.div`
  grid-column: 1/3;
  grid-row: 1;
`;

const DateBox = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

const DescriptionBox = styled.div`
  grid-column: 1/4;
  grid-row: 2;
`;

class GithubCard extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string
  };

  static defaultProps = {
    name: "bbl",
    description: "blog & homepage project based on gatsby",
    date: "2018-02-05T13:42:31Z",
    url: "https://github.com/BoBinLee/bbl"
  };

  render() {
    const { name, description, date } = this.props;
    return (
      <Root onClick={this._onPress}>
        <NameBox>{name}</NameBox>
        <DateBox>{distanceInWordsToNow(new Date(date))}</DateBox>
        <DescriptionBox>{description}</DescriptionBox>
      </Root>
    );
  }

  _onPress = () => {
    const { url } = this.props;
    window.open(url, "_blank");
  };
}

export default GithubCard;
