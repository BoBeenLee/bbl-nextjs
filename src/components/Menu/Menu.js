import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { slide as BurgerMenu } from "react-burger-menu";
import styled from "styled-components";
import theme from "../../constants/theme";
import { MenuItem } from "./";
import { Separator } from "../Separator";

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    left: "0px",
    top: "1.2em"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: theme.bgColor
    // fontSize: "18px"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad"
  },
  bmOverlay: {
    left: 0,
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const HeaderBox = styled.div`
  display: flex !important;
  flex-direction: row;
  height: ${props => props.theme.headerHeight};
`;

const BottomSeparator = styled(Separator)`
  border-width: 2px;
`;

class Menu extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    toggleMenu: () => {}
  };
  render() {
    const menus = [
      { name: "Home", url: "/" },
      { name: "Introduction", url: "/intro" },
      { name: "Portfolio", url: "/production" },
      { name: "Github", url: "/github" },
      { name: "Tistory", url: "/tistory" }
    ];
    const { isOpen, toggleMenu, ...rest } = this.props;
    return (
      <BurgerMenu
        right
        styles={styles}
        isOpen={isOpen}
        onStateChange={toggleMenu}
        pageWrapId={"page-box"}
        outerContainerId={"outer-container"}
      >
        <HeaderBox>
          <BottomSeparator />
        </HeaderBox>
        {_.map(menus, menu => <MenuItem key={menu.name} {...menu} />)}
      </BurgerMenu>
    );
  }
}

export default Menu;
