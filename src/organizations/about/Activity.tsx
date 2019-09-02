import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import { SubTitle, ContentTitle } from "../../components/Title";
import { Separator } from "../../components/Separator";
import { LineText } from "../../components/Text";
import { media } from "../../utils/media";
import { isBrowser } from "../../utils/navigator";

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10px;
  margin-bottom: 15px;

  ${media.mobile`
    grid-template-columns: 1fr;
  `};
`;

const TitleBox = styled(ContentTitle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const ContentBox = styled(LineText)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomSeparator = styled(Separator)`
  margin: 40px 0;
`;

class Activity extends PureComponent {
  static propTypes = {};
  static defaultProps = {};

  _renderItem = item => (
    <ItemBox key={item.name}>
      <TitleBox title={item.name} uri={item.url} />
      <ContentBox>{item.description}</ContentBox>
    </ItemBox>
  );
  render() {
    const items = [
      {
        name: "Nexters",
        url: "http://teamnexters.com/",
        description: "Developer"
      },
      {
        name: "SOPT",
        url: "http://sopt.org/wp/",
        description: "Developer"
      }
    ];
    return (
      <Root>
        <SubTitleBox title="Activity" />
        {_.map(items, item => this._renderItem(item))}
        <BottomSeparator />
      </Root>
    );
  }
}

export default Activity;
