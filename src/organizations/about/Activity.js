import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import { SubTitle, ContentTitle } from "../../components/Title";
import { Separator } from "../../components/Separator";
import { LineText } from "../../components/Text";

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10px;
  margin-bottom: 15px;
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

class Activity extends Component {
  static propTypes = {};
  static defaultProps = {};
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
        <SubTitleBox title={"Activity"} />
        {_.map(items, item => this._renderItem(item))}
        <BottomSeparator />
      </Root>
    );
  }

  _renderItem = item => {
    return (
      <ItemBox>
        <TitleBox
          onClick={() => window.open(item.url, "_blank")}
          title={item.name}
        />
        <ContentBox>{item.description}</ContentBox>
      </ItemBox>
    );
  };
}

export default Activity;
