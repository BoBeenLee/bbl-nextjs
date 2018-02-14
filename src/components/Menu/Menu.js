import React, { Component } from "react";
import PropTypes from "prop-types";
import { slide as BurgerMenu } from "react-burger-menu";
import { MenuItem } from './';
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
    const menus = [{ name: 'Home', url: '/' }, { name: 'Introduction', url: '/intro'}, { name: 'Portfolio', url: '/production' }, { name: 'Github', url: '/github' }, { name: 'Tistory', url: '/tistory' }];
    const { isOpen, toggleMenu } = this.props;
    return (
      <MenuBox
        isOpen={isOpen}
        onStateChange={this.toggleMenu}
        pageWrapId={"page-box"}
        outerContainerId={"outer-container"}
      >
        {_.map(menus, menu => <MenuItem {...menu} />)}
      </MenuBox>
    );
  }
}

export default Menu;
