import React, { Component } from "react";
import Link from "gatsby-link";
import Headroom from "react-headroom";
import Menu from "../Menu";
import { HeaderBox } from "./styles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenHeader: true,
      isOpenMenu: false
    };
  }

  toggleHeader = value => {
    this.setState({
      isOpenHeader: value,
      isOpenMenu: false
    });
  };

  toggleMenu = state => {
    this.setState({
      isOpenHeader: true,
      isOpenMenu: state.isOpen
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
        <div>
          <Menu isOpen={isOpenMenu} toggleMenu={this.toggleMenu} />
          <span style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none"
              }}
            >
              Gatsby
            </Link>
          </span>
        </div>
      </HeaderBox>
    );
  }
}

export default Header;
