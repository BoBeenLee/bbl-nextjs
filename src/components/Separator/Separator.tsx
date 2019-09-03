import React, { Component, PureComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.lineColor};
`;

class Separator extends PureComponent {
  public static propTypes = {};
  public static defaultProps = {};
  public render() {
    return <Root {...this.props} />;
  }
}

export default Separator;
