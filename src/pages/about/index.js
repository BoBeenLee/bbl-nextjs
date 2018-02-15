import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  About,
  Education,
  Experience,
  Activity,
  Skill
} from "../../organizations/about";

const Root = styled.div`
  padding-top: 20px;
`;

class AboutPage extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <Root>
        <Education />
        <Experience />
        <Activity />
        <Skill />
      </Root>
    );
  }
}

export default AboutPage;
