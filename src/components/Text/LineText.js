import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.theme.third};
`;

class LineText extends PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { children, ...rest } = this.props;
    return <Root {...rest}>{children}</Root>;
  }
}

export default LineText;
