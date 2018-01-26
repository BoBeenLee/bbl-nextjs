import React, { Component } from "react";
import PropTypes from "prop-types";
import { slide as BurgerMenu } from "react-burger-menu";
import { MenuBox } from "./styles";

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
    const { isOpen, toggleMenu } = this.props;
    return (
      <MenuBox
        isOpen={isOpen}
        onStateChange={this.toggleMenu}
        pageWrapId={"page-box"}
        outerContainerId={"outer-container"}
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </MenuBox>
    );
  }
}

export default Menu;
