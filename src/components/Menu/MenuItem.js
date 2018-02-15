import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PropTypes from "prop-types";

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
    url: PropTypes.string
  };

  static defaultProps = {
    name: "Home",
    url: "/"
  };
  render() {
    const { name, url } = this.props;
    return (
      <Root>
        <MenuLink to={url}>{name}</MenuLink>
      </Root>
    );
  }
}

export default MenuItem;
