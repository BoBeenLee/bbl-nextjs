import React, { Component } from "react";
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
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const SkillItemBox = styled(LineText)``;

const BottomSeparator = styled(Separator)`
  margin: 40px 0;
`;

const items = {
  frontend: {
    name: "Front End",
    skills: ["ReactJS", "JavaScript", "jQuery", "SASS"]
  },
  backend: {
    name: "Back End",
    skills: ["NodeJS", "GraphQL", "Spring Framework", "Spring Boot"]
  },
  mobile: { name: "Mobile", skills: ["React Native", "Android"] },
  db: { name: "DB", skills: ["RDB", "MongoDB", "Firebase"] },
  collaboration: {
    name: "Collaboration",
    skills: ["Slack", "JIRA", "WIKI", "Github", "Trello", "TeamViewer"]
  },
  usage: { name: "Usage", skills: ["AWS EC2", "AWS S3", "Docker"] },
  tool: {
    name: "Tools",
    skills: [
      "Intellj IDEA",
      "Webstorm",
      "VSCode",
      "Android Studio",
      "SourceTree",
      "Zeplin"
    ]
  }
};

class Skill extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <Root>
        <SubTitleBox title="Skills" />
        {_.map(items, this._renderItem)}
        <BottomSeparator />
      </Root>
    );
  }

  _renderItem = item => {
    return (
      <ItemBox>
        <ContentTitle title={item.name} />
        <SkillsBox>
          {_.map(item.skills, skill => <SkillItemBox>{skill}</SkillItemBox>)}
        </SkillsBox>
      </ItemBox>
    );
  };
}

export default Skill;
