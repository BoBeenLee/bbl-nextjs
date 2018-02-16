import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { slide as BurgerMenu } from "react-burger-menu";
import styled from "styled-components";
import MenuIcon from "react-icons/lib/md/menu";
import { theme, menu as menus } from "../../constants";
import { MenuItem } from "./";
import { Separator } from "../Separator";

import "./menu.css";

const styles = {
  bmBurgerButton: {
    position: "relative",
    width: "20px",
    height: "15px"
  },
  bmBurgerBars: {
    background: theme.primary
  },
  bmCrossButton: {
    height: "12px",
    width: "12px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    top: 0,
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
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const HeaderBox = styled.div`
  display: flex !important;
  flex-direction: row;
  height: ${props => props.theme.headerHeight};
`;

const ContentBox = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
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
    const { isOpen, toggleMenu, ...rest } = this.props;
    return (
      <BurgerMenu
        id="menu"
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
        <ContentBox>
          {_.map(menus, menu => <MenuItem key={menu.name} onPress={toggleMenu} {...menu} />)}
        </ContentBox>
      </BurgerMenu>
    );
  }
}

export default Menu;
