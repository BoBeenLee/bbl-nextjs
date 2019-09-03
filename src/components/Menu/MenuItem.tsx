import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import { theme, isHome } from "../../constants";
import { Link } from "gatsby";

interface IProps {
  name: string;
  url: string;
  onPress: (value: { isOpen: boolean }) => void;
}

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

class MenuItem extends Component<IProps> {
  public static defaultProps = {
    name: "Home",
    url: "/",
    onPress: () => {}
  };
  render() {
    const { name, url, onPress } = this.props;
    return (
      <Root>
        <MenuLink
          // exact={isHome(url)}
          // strict={true}
          activeStyle={{ color: theme.secondary }}
          to={url}
          onClick={onPress as any}
        >
          {name}
        </MenuLink>
      </Root>
    );
  }
}

export default MenuItem;
