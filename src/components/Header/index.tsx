import AniLink from "gatsby-plugin-transition-link/AniLink";
import _ from "lodash";
import React, { Component } from "react";
import Headroom, { ReactHeadroomProps } from "react-headroom";
import styled, { css } from "styled-components";
import { menu as titles, theme } from "src/constants";
import { media } from "src/utils/media";
import { isIE } from "src/utils/navigator";
import { Avatar } from "src/components/Avatar";
import { Menu } from "src/components/Menu";
import { Separator } from "src/components/Separator";
import QuokkaIcon from "./images/quokka.png";

interface IProps extends ReactHeadroomProps {
  isOpenHeader: boolean;
  children: React.ReactNode;
}

interface IStates {
  isOpenHeader: boolean;
  isOpenMenu: boolean;
}

const RootWrapper = styled.div`
  .headroom-transform-none .headroom {
    transform: none !important;
  }
`;

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: ${theme.headerHeight};
  position: relative;
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

const HeaderTitle = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 30% repeat(4, 1fr);
  grid-template-rows: auto;
  ${media.desktop`
    width: ${theme.desktopSize}px;
  `};
  ${isIE() &&
    css`
      display: flex;
      padding: 20px;
    `}
`;

const Logo = styled.div`
  grid-column: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoLink = styled(AniLink)`
  width: 45px;
  height: 45px;
`;

const IconBox = styled(Avatar)`
  width: 45px;
  height: 45px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(AniLink)`
  font-size: 11px;
  padding: 0.5em;
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
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
    width: ${theme.desktopSize + 80}px;
  `};
`;

const HeaderBox = ({ children, isOpenHeader, ...props }: IProps) => {
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

class Header extends Component<any, IStates> {
  public state = {
    isOpenHeader: true,
    isOpenMenu: false
  };

  public render() {
    const { isOpenHeader, isOpenMenu } = this.state;
    return (
      <RootWrapper>
        <HeaderBox
          isOpenHeader={isOpenHeader}
          onUnpin={_.partial(this.toggleHeader, false)}
          onPin={_.partial(this.toggleHeader, true)}
        >
          <Root>
            <HeaderTitle>
              <Logo>
                <LogoLink to="/" fade={true}>
                  <IconBox src={QuokkaIcon} alt="bobeenlee" />
                </LogoLink>
              </Logo>
              {_.map(titles, this.renderTitleItem)}
            </HeaderTitle>
            <MenuBox>
              <Menu isOpen={isOpenMenu} toggleMenu={this.toggleMenu} />
            </MenuBox>
            <SeperatorBottomBox>
              <SeperatorBottom />
            </SeperatorBottomBox>
          </Root>
        </HeaderBox>
      </RootWrapper>
    );
  }

  private toggleHeader = (value: boolean) => {
    const { isOpenMenu } = this.state;
    if (isOpenMenu) {
      return;
    }
    this.setState({
      isOpenHeader: value
    });
  };

  private toggleMenu = (value: { isOpen: boolean }) => {
    this.setState({
      isOpenHeader: true,
      isOpenMenu: value.isOpen
    });
  };

  private renderTitleItem = (
    title: { url: string; name: string },
    index: number
  ) => {
    const { url, name } = title;
    return (
      <TitleBox key={index}>
        <Title activeStyle={{ color: theme.secondary }} to={url} fade={true}>
          {name}
        </Title>
      </TitleBox>
    );
  };
}

export default Header;
