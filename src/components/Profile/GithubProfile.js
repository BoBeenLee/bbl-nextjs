import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import { Avatar } from "../Avatar";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const AvatarBox = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBox = styled.div`
  grid-column: 2/5;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProfileItemBox = styled.div``;

const OrganizationBox = styled.div`
  grid-column: 1/5;
  grid-row: 3;
  /* background: green; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const OrganizationItemBox = styled.div``;

class GithubProfile extends Component {
  static propTypes = {
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    followerCount: PropTypes.number,
    followingCount: PropTypes.number,
    organizations: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        memberCount: PropTypes.number
      })
    )
  };

  static defaultProps = {
    avatarUrl: "https://avatars0.githubusercontent.com/u/1489321?v=4",
    email: "globaldev@naver.com",
    location: "Seoul",
    followerCount: 100,
    followingCount: 100,
    organizations: [
      {
        avatarUrl: "https://avatars2.githubusercontent.com/u/4995702?v=4",
        name: "Nexters",
        memberCount: 109
      }
    ]
  };

  render() {
    const {
      avatarUrl,
      email,
      location,
      followerCount,
      followingCount,
      organizations
    } = this.props;
    return (
      <Root>
        <AvatarBox>
          <Avatar src={avatarUrl} width="80%" />
        </AvatarBox>
        <ProfileBox>
          <ProfileItemBox>{email}</ProfileItemBox>
          <ProfileItemBox>{location}</ProfileItemBox>
          <ProfileItemBox>
            follower {followerCount} following {followingCount}
          </ProfileItemBox>
        </ProfileBox>
        <OrganizationBox>
          {_.map(organizations, item => this._renderOranization(item))}
        </OrganizationBox>
      </Root>
    );
  }

  _renderOranization = item => {
    return <OrganizationItemBox>{item.name}</OrganizationItemBox>;
  };
}

export default GithubProfile;
