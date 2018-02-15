import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  font-size: 30px;
  font-weight: 100;
  color: ${props => props.theme.third};
`;

class SubTitle extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  static defaultProps = {
    title: "Hello World"
  };
  render() {
    const { title, ...rest } = this.props;
    return <Root {...rest}>{title}</Root>;
  }
}

export default SubTitle;
