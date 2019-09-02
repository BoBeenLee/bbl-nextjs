import _ from "lodash";
import React, { Component, PureComponent } from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  uri: string;
}

const Root = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.primary};
`;

const RootLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.primary};
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

class ContentTitle extends PureComponent<IProps> {
  public static defaultProps = {
    title: "Hello World"
  };
  public render() {
    const { title, uri, ...rest } = this.props;
    if (!_.isEmpty(uri)) {
      return (
        <RootLink href={uri} target="_blank" {...rest}>
          {title}
        </RootLink>
      );
    }
    return <Root {...rest}>{title}</Root>;
  }
}

export default ContentTitle;
