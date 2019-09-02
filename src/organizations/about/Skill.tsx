import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import { ContentTitle, SubTitle } from "../../components/Title";
import { Separator } from "../../components/Separator";
import { LineText } from "../../components/Text";

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  padding-left: 10px;
  margin-bottom: 15px;
`;

const SkillsBox = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;

const SkillItemBox = styled(LineText)`
  margin-right: 10px;
`;

const BottomSeparator = styled(Separator)`
  margin: 40px 0;
`;

const items = {
  frontend: {
    name: "Front End",
    skills: ["react", "javascript", "typescript", "jQuery", "sass"]
  },
  backend: {
    name: "Back End",
    skills: ["nodejs", "graphql", "spring framework", "spring boot"]
  },
  mobile: { name: "Mobile", skills: ["react native", "android"] },
  db: { name: "DB", skills: ["rdb", "mongodb", "firebase"] },
  collaboration: {
    name: "Collaboration",
    skills: ["slack", "jira", "wiki", "github", "trello", "teamviewer"]
  },
  usage: { name: "Usage", skills: ["aws ec2, s3", "docker"] },
  tool: {
    name: "Tools",
    skills: [
      "vscode",
      "gitkraken",
      "reactotron",
      "insomnia",
      "intellj idea",
      "webstorm",
      "android studio",
      "source tree",
      "zeplin"
    ]
  }
};

class Skill extends PureComponent {
  _renderItem = item => (
    <ItemBox key={item.name}>
      <ContentTitle title={item.name} uri={item.uri} />
      <SkillsBox>
        {_.map(item.skills, (skill, index) => (
          <SkillItemBox key={index}>{skill}</SkillItemBox>
        ))}
      </SkillsBox>
    </ItemBox>
  );

  render() {
    return (
      <Root>
        <SubTitleBox title="Skills" />
        {_.map(items, this._renderItem)}
        <BottomSeparator />
      </Root>
    );
  }
}

export default Skill;
