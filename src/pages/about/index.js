import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { About, Education, Experience, Skill } from "../../organizations/about";

const Root = styled.div``;

class AboutPage extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <Root>
        <About />
        <Education />
        <Experience />
        <Skill />
      </Root>
    );
  }
}

export default AboutPage;
