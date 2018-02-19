import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const Root = styled.div`
`;

class ImagePopup extends Component {
    static propTypes = {
        renderImage: PropTypes.func
    }
    static defaultProps = {
        renderImage: () => {}
    }
  render() {
      const { renderImage } = this.props;
    return <Root>{ renderImage() }</Root>;
  }
}

export default ImagePopup;
