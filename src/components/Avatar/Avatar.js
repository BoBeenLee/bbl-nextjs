import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.img`
    border-radius: 50%;
`;

class Avatar extends Component {
    static propTypes = {
        avatarUrl: PropTypes.string
    }
    static defaultProps = {
        avatarUrl: "https://avatars0.githubusercontent.com/u/1489321?v=4"
    }
  render() {
      const { avatarUrl, ...rest } = this.props;
    return <Root {...rest} src={avatarUrl} />;
  }
}

export default Avatar;
