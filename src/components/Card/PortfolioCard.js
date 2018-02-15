import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const NameBox = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const PeriodBox = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

const LinkBox = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

const SkillBox = styled.div`
  grid-column: 1/4;
  grid-row: 2;
`;

const SummaryBox = styled.div`
  grid-column: 1/4;
  grid-row: 3;
`;

const GalleryBox = styled.div`
  grid-column: 1/4;
  grid-row: 4;
`;

class PortfolioCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    period: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string
  };
  static defaultProps = {
    name: "flass",
    period: "2016-01 ~ 2017-01",
    skills: ["NONE"],
    summary: "INTRO"
  };
  render() {
    const { name, period, skills, summary } = this.props;
    return (
      <Root>
        <NameBox>{name}</NameBox>
        <PeriodBox>{period}</PeriodBox>
        <LinkBox>link</LinkBox>
        <SkillBox>{_.map(skills, _.identity)}</SkillBox>
        <SummaryBox>{summary}</SummaryBox>
        <GalleryBox>images</GalleryBox>
      </Root>
    );
  }
}

export default PortfolioCard;
