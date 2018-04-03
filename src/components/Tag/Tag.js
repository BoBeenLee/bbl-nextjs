import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
`;

class Tag extends PureComponent {
    static propTypes = {
      name: PropTypes.string,
    };
    static defaultProps = {
      name: 'Nexters',
    };
    render() {
      const { name, ...rest } = this.props;
      return <Root {...rest}>{name}</Root>;
    }
}

export default Tag;
