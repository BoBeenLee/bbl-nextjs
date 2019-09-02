import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import CloseIcon from "./images/x-circle.svg";
import theme from "../../constants/theme";

interface IProps {
  showModal: boolean;
  renderImage: () => React.ReactNode;
  onClose: () => void;
}

const customStyle = {
  overlay: {
    zIndex: 999
  }
};

const Root = styled(ReactModal)``;

const ImagePopupBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  /* border: 1px solid rgb(204, 204, 204); */
  background: transparent;
  max-width: ${theme.mobileSize};
  text-align: center;
`;

const ImageBox = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
`;

const CloseBox = styled.img<{ size: number }>`
  position: absolute;
  top: -${({ size = 20 }) => size / 2}px;
  right: -${({ size = 20 }) => size / 2}px;
  width: ${({ size = 20 }) => size}px;
  height: ${({ size = 20 }) => size}px;
  cursor: pointer;
`;

class ImagePopup extends PureComponent<IProps> {
  public static defaultProps = {
    showModal: false,
    renderImage: () => {},
    onClose: () => {}
  };

  public render() {
    const { showModal, renderImage, onClose } = this.props;
    return (
      <Root style={customStyle} isOpen={showModal}>
        <ImagePopupBox>
          <ImageBox>
            <CloseBox onClick={onClose} size={30} src={CloseIcon} />
            {renderImage()}
          </ImageBox>
        </ImagePopupBox>
      </Root>
    );
  }
}

export default ImagePopup;
