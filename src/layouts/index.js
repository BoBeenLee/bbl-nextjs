import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import _ from "lodash";
import ReactModal from "react-modal";
import { media } from "../utils/StyleUtils";
import Header from "../components/Header";
import { BottomPopup } from "../components/Popup";
import { withThemes } from "../hoc";
import { Footer } from "../components/Footer";
import config from "../../config/SiteConfig";
import "./styles";

const Root = styled.div`
  height: 100%;
`;

const ContainerBox = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

const HeaderBox = styled.header`
  grid-area: header;
`;

const ContentBox = styled.main`
  grid-area: content;
  margin: 0 auto;
  padding: 20px 20px;
  width: 100%;
  /* height: 2000px; */
  ${media.desktop`
    max-width: ${props => props.theme.desktopSize}px;
  `};
`;

const FooterBox = styled.footer`
  grid-area: footer;
`;

const StatePopupBox = styled(BottomPopup)`
  display: ${({ isShowStatePopup }) => (isShowStatePopup ? "flex" : "none")};
  color: ${props => props.theme.warning};
`;

class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func
  };

  state = {
    isShowStatePopup: false
  };

  handleOffline = () => {
    this.setState({ isShowStatePopup: true });
  };

  handleOnline = () => {
    this.setState({ isShowStatePopup: false });
  };

  componentDidMount() {
    window.addEventListener("offline", this.handleOffline);
    window.addEventListener("online", this.handleOnline);
  }

  render() {
    const { children } = this.props;
    const { isShowStatePopup } = this.state;
    return (
      <Root id="outer-container">
        <StatePopupBox isShowStatePopup={isShowStatePopup}>
          <span>
            Your computer seems to be offline. We'll keep trying, but there may
            be a problem with your connection.
          </span>
        </StatePopupBox>
        {this._renderHelmet()}
        <ContainerBox>
          <HeaderBox>
            <Header />
          </HeaderBox>
          <ContentBox id="page-box">{children()}</ContentBox>
          <FooterBox>
            <Footer />
          </FooterBox>
        </ContainerBox>
      </Root>
    );
  }

  _renderHelmet = () => {
    const metas = _.map(
      _.pick(config, ["description", "keywords"]),
      (value, key) => {
        return {
          name: key,
          content: value
        };
      }
    );
    return <Helmet title="BoBeen Lee" meta={metas} />;
  };
}

export default withThemes(TemplateWrapper);
