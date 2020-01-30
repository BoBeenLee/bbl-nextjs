import React, { PureComponent } from "react";
import styled from "styled-components";
import theme from "src/constants/theme";

interface IProps {
  children: React.ReactNode;
}

const Root = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${theme.third};
`;

class LineText extends PureComponent<IProps> {
  public render() {
    const { children, ...rest } = this.props;
    return <Root {...rest}>{children}</Root>;
  }
}

export default LineText;
