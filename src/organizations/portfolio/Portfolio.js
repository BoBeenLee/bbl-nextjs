import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import { SubTitle } from "../../components/Title";
import { productions } from "./data";
import { PortfolioCard } from "../../components/Card";
import { callValue } from "../../utils/ObjectUtils";

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 10px;
`;

const ContentBox = styled.div``;

class Portfolio extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <Root>
        <SubTitleBox title="Portfolio" />
        <ContentBox>{_.map(productions, this._renderPortfolioCard)}</ContentBox>
      </Root>
    );
  }

  _renderPortfolioCard = production => {
    const { images } = this.props;
    const { name, period, skills, summary = "" } = production;
    return (
      <PortfolioCard
        key={name}
        name={name}
        period={period}
        skills={skills}
        summary={summary}
        images={callValue(() => images[`${name}Images`].edges, [])}
      />
    );
  };
}

export default Portfolio;
