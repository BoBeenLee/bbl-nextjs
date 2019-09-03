import _ from "lodash";
import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import { Separator } from "../../components/Separator";
import { LineText } from "../../components/Text";
import { ContentTitle, SubTitle } from "../../components/Title";
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

// tslint:disable:object-literal-sort-keys
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

class Activity extends PureComponent {
  public render() {
    return (
      <Root>
        <SubTitleBox title="Activity" />
        {_.map(items, item => this.renderItem(item))}
        <BottomSeparator />
      </Root>
    );
  }

  private renderItem = item => (
    <ItemBox key={item.name}>
      <TitleBox title={item.name} uri={item.url} />
      <ContentBox>{item.description}</ContentBox>
    </ItemBox>
  );
}

export default Activity;
