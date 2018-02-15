import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import { media } from "../utils/StyleUtils";
import Header from "../components/Header";
import { BottomPopup } from "../components/Popup";
import theme from "../constants/theme";
import "./index.css";

const Root = styled.div``;

const ContentBox = styled.div`
  margin: 0 auto;
  padding-top: 0;
  width: 100%;
  height: 2000px;
  ${media.desktop`
    max-width: ${props => props.theme.desktopSize}px;
  `};
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

  handleMotion = () => {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    console.log("handleMotion");
  };

  componentDidMount() {
    window.addEventListener("offline", this.handleOffline);
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("devicemotion", this.handleMotion, true);
  }

  render() {
    const { children } = this.props;
    const { isShowStatePopup } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Root id="outer-container">
          <StatePopupBox isShowStatePopup={isShowStatePopup}>
            <span>
              We'll keep trying, but there may be a problem with your
              connection.
            </span>
          </StatePopupBox>
          <Helmet
            title="BoBeenLee"
            meta={[
              { name: "description", content: "BoBeenLee" },
              {
                name: "keywords",
                content: "BoBeenLee, BoBinLee, React, React Native, JS"
              }
            ]}
          />
          <Header />
          <ContentBox id="page-box">{children()}</ContentBox>
        </Root>
      </ThemeProvider>
    );
  }
}

export default TemplateWrapper;
