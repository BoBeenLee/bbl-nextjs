import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme, isHome } from "../../constants";

const Root = styled.div`
  padding: 10px 0;
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.secondary};
  }
`;

class MenuItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    onPress: PropTypes.func
  };

  static defaultProps = {
    name: "Home",
    url: "/"
  };
  render() {
    const { name, url, onPress } = this.props;
    return (
      <Root>
        <MenuLink
          exact={isHome(url)}
          strict
          activeStyle={{ color: theme.secondary }}
          to={url}
          onClick={onPress}
        >
          {name}
        </MenuLink>
      </Root>
    );
  }
}

export default MenuItem;
