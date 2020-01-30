import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import theme from "src/constants/theme";

const Root = styled.div`
  width: 100%;
  border: 1px solid ${theme.lineColor};
`;

class Separator extends PureComponent {
  public static propTypes = {};
  public static defaultProps = {};
  public render() {
    return <Root {...this.props} />;
  }
}

export default Separator;
