import AniLink from "gatsby-plugin-transition-link/AniLink";
import _ from "lodash";
import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import { theme } from "src/constants";

interface IProps {
  name: string;
  url: string;
  onPress: (value: { isOpen: boolean }) => void;
}

const Root = styled.div`
  padding: 10px 0;
`;

const MenuLink = styled(AniLink)`
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
  }
`;

class MenuItem extends Component<IProps> {
  public static defaultProps = {
    name: "Home",
    onPress: _.identity,
    url: "/"
  };
  public render() {
    const { name, url, onPress } = this.props;
    return (
      <Root>
        <MenuLink
          // exact={isHome(url)}
          // strict={true}
          activeStyle={{ color: theme.secondary }}
          to={url}
          onClick={onPress as any}
          fade={true}
        >
          {name}
        </MenuLink>
      </Root>
    );
  }
}

export default MenuItem;
