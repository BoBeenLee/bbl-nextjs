import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.primary};
`;

class ContentTitle extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };
  static defaultProps = {
    title: 'Hello World',
  };
  render() {
    const { title, ...rest } = this.props;
    return <Root {...rest}>{title}</Root>;
  }
}

export default ContentTitle;
