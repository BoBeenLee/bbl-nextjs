import _ from "lodash";
import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import config from "../../../config/SiteConfig";
import { withThemes } from "../../hoc";
import { media } from "../../utils/media";
import { isBrowser } from "../../utils/navigator";
import { Footer } from "../Footer";
import Header from "../Header";
import { BottomPopup } from "../Popup";
import { GlobalStyle } from "./styles";

interface IStates {
  isShowStatePopup: boolean;
}

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

  ${media.mobile`
    width: 1px;
    min-width: 100%;
  `}
  /* height: 2000px; */
  ${media.desktop`
    max-width: ${props => props.theme.desktopSize}px;
  `}
`;

const FooterBox = styled.footer`
  grid-area: footer;
`;

const StatePopupBox = styled(BottomPopup)<{ isShowStatePopup: boolean }>`
  display: ${({ isShowStatePopup }) => (isShowStatePopup ? "flex" : "none")};
  color: ${props => props.theme.warning};
`;

class Layout extends Component<any, IStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      isShowStatePopup: false
    };
  }

  public componentDidMount() {
    if (isBrowser) {
      window.addEventListener("offline", this.handleOffline);
      window.addEventListener("online", this.handleOnline);
    }
  }

  public render() {
    const { children } = this.props;
    const { isShowStatePopup } = this.state;
    return (
      <Root id="outer-container">
        <GlobalStyle />
        <StatePopupBox isShowStatePopup={isShowStatePopup}>
          <span>
            Your computer seems to be offline. We&apos;ll keep trying, but there
            may be a problem with your connection.
          </span>
        </StatePopupBox>
        {this.renderHelmet()}
        <ContainerBox>
          <HeaderBox>
            <Header />
          </HeaderBox>
          <ContentBox id="page-box">{children}</ContentBox>
          <FooterBox>
            <Footer />
          </FooterBox>
        </ContainerBox>
      </Root>
    );
  }

  private handleOffline = () => {
    this.setState({ isShowStatePopup: true });
  };

  private handleOnline = () => {
    this.setState({ isShowStatePopup: false });
  };

  private renderHelmet = () => {
    const metas = _.map(
      _.pick(config, ["description", "keywords"]),
      (value, key) => ({
        content: value,
        name: key
      })
    );
    return <Helmet title="BoBeen Lee" meta={metas} />;
  };
}

export default withThemes(Layout);
