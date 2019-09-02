import React, { Component, PureComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.theme.third};
`;

class LineText extends PureComponent {
  public render() {
    const { children, ...rest } = this.props;
    return <Root {...rest}>{children}</Root>;
  }
}

export default LineText;
