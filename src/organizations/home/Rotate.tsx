import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import _ from "lodash";
import FacebookIcon from "./images/facebook.svg";
import InstagramIcon from "./images/instagram.svg";
import LinkedInIcon from "./images/linkedin.svg";
import { Rotate as WindowRotate } from "../../facc";

const Root = styled.div`
  display: grid;
  grid-template-areas: ". . ." ". icon ." ". . .";
  position: relative;
  height: 450px;
  grid-template-rows: 20% 50% 30%;
`;

const IconBox = styled.div<{ zDeg: number }>`
  grid-area: icon;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transform: ${({ zDeg = 0 }) => `rotateZ(${zDeg}deg)`};
`;

const RotateBox = styled.div`
  /* display: inline-block; */
  /* transform: rotateX(20deg); */
`;

const LinkBox = styled.a``;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
class Rotate extends Component {
  static propTypes = {};
  static defaultProps = {};

  componentDidMount() {}

  _renderIcons = ({ zDeg }) => (
    <IconBox zDeg={zDeg}>
      <LinkBox href="https://www.facebook.com/bobin.lee.9" target="_blank">
        <Icon alt="facebook" src={FacebookIcon} />
      </LinkBox>
      <LinkBox href="https://www.instagram.com/bobeenlee_" target="_blank">
        <Icon alt="instagram" src={InstagramIcon} />
      </LinkBox>
      <LinkBox
        href="https://www.linkedin.com/in/%EB%B3%B4%EB%B9%88-%EC%9D%B4-035613a5/"
        target="_blank"
      >
        <Icon alt="linkedin" src={LinkedInIcon} />
      </LinkBox>
    </IconBox>
  );

  render() {
    return (
      <Root>
        <WindowRotate>{({ zDeg }) => this._renderIcons({ zDeg })}</WindowRotate>
      </Root>
    );
  }
}

export default Rotate;
