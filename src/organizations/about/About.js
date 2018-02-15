import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SubTitle, ContentTitle } from "../../components/Title";
import { Separator } from "../../components/Separator";

const Root = styled.div`
`;

class About extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <Root>
        <SubTitle title={"About"} />

        <Separator />
      </Root>
    );
  }
}

export default About;
