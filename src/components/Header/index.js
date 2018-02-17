import React, { Component } from "react";
import Link from "gatsby-link";
import { IndexLink } from "react-router-dom";
import Headroom from "react-headroom";
import styled from "styled-components";
import { media } from "../../utils/StyleUtils";
import { Menu } from "../Menu";
import { theme, menu as titles, isHome } from "../../constants";
import { Separator } from "../Separator";
import QuokkaIcon from "./images/quokka.png";
import "./headroom.css";

const Root = styled.div`
  /* margin: 0 auto; */
  /* max-width: 960px; */
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: ${props => props.theme.headerHeight};
  position: relative;
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

const HeaderBox = ({ children, isOpenHeader, ...props }) => {
  const styles = Object.assign({}, { backgroundColor: "#fff" });
  return (
    <Headroom
      className={isOpenHeader ? "headroom-transform-none" : ""}
      style={styles}
      {...props}
    >
      {children}
    </Headroom>
  );
};

const HeaderTitle = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 30% repeat(4, 1fr);
  grid-template-rows: auto;
  ${media.desktop`
    width: ${props => props.theme.desktopSize}px;
  `};
`;

const Logo = styled.div`
  grid-column: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoLink = styled(Link)`
  width: 45px;
  height: 45px;
`;

const IconBox = styled.img`
  border-radius: 20px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Link)`
  font-size: 11px;
  padding: 0.5em;
  color: ${({ active, theme }) => (active ? theme.secondary : theme.primary)};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.secondary};
  }

  ${media.mobile`
    display: none;
    `};
`;

const MenuBox = styled.div`
  grid-column: 3;
  position: relative;
  display: none;
  width: 100px;
  ${media.mobile`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`;

const SeperatorBottomBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeperatorBottom = styled(Separator)`
  width: 100%;
  overflow: hidden;
  ${media.desktop`
    width: ${props => props.theme.desktopSize + 40}px;
  `};
`;

class Header extends Component {
  state = {
    isOpenHeader: true,
    isOpenMenu: false
  };

  toggleHeader = value => {
    const { isOpenMenu } = this.state;
    if (isOpenMenu) {
      return;
    }
    this.setState({
      isOpenHeader: value
    });
  };

  toggleMenu = value => {
    this.setState({
      isOpenHeader: true,
      isOpenMenu: value.isOpen
    });
  };

  render() {
    const { isOpenHeader, isOpenMenu } = this.state;
    return (
      <HeaderBox
        isOpenHeader={isOpenHeader}
        onUnpin={() => this.toggleHeader(false)}
        onPin={() => this.toggleHeader(true)}
      >
        <Root>
          <HeaderTitle>
            <Logo>
              <LogoLink to="/">
                <IconBox src={QuokkaIcon} alt="bobeenlee" />
              </LogoLink>
            </Logo>
            {_.map(titles, this._renderTitleItem)}
          </HeaderTitle>
          <MenuBox>
            <Menu isOpen={isOpenMenu} toggleMenu={this.toggleMenu} />
          </MenuBox>
          <SeperatorBottomBox>
            <SeperatorBottom />
          </SeperatorBottomBox>
        </Root>
      </HeaderBox>
    );
  }

  _renderTitleItem = (title, index) => {
    const { url, name } = title;
    return (
      <TitleBox key={index}>
        <Title
          exact={isHome(url)}
          strict
          activeStyle={{ color: theme.secondary }}
          to={url}
        >
          {name}
        </Title>
      </TitleBox>
    );
  };
}

export default Header;
