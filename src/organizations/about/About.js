import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  border-radius: 50%;
`;

class About extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return <Root> HelloWOrld</Root>;
  }
}

export default About;
