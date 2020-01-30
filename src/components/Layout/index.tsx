import _ from "lodash";
import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import config from "metadata";
import { media } from "src/utils/media";
import { isBrowser } from "src/utils/navigator";
import { Footer } from "src/components/Footer";
import Header from "src/components/Header";
import { BottomPopup } from "src/components/Popup";
import { GlobalStyle } from "src/components/Layout/styles";
import theme from "src/constants/theme";
import SEO from "src/components/Layout/SEO";

interface IProps {
  pathname: string;
  children: React.ReactNode;
}

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
  ${media.desktop`
    max-width: ${theme.desktopSize}px;
  `}
`;

const FooterBox = styled.footer`
  grid-area: footer;
`;

const StatePopupBox = styled(BottomPopup)<{ isShowStatePopup: boolean }>`
  display: ${({ isShowStatePopup }) => (isShowStatePopup ? "flex" : "none")};
  color: ${theme.warning};
`;

class Layout extends Component<IProps, IStates> {
  constructor(props: IProps) {
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
        <SEO />
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

export default Layout;
