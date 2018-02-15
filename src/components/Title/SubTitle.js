import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  font-size: 36px;
  font-weight: 100;
  color: ${props => props.theme.third};
`;

class SubTitle extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return <Root>Hello</Root>;
  }
}

export default SubTitle;
