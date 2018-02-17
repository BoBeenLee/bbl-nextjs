import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import FacebookIcon from "./images/facebook.svg";
import InstagramIcon from "./images/instagram.svg";
import LinkedInIcon from "./images/linkedin.svg";
import { withRotate } from "../../hoc";

const Root = styled.div`
    display: grid;
    grid-template-areas: ". . ." ". icon ." ". . .";
    position: relative;
    height: 100%;
    grid-template-rows: 100px 250px 150px;
}`;

const IconBox = styled.div`
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

const FacebookIconBox = styled.div`
  grid-area: facebook;
  text-align: right;
`;

const InstagramIconBox = styled.div`
  grid-area: instagram;
  text-align: center;
`;

const LinkedInIconBox = styled.div`
  grid-area: linkedin;
  text-align: left;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
class Rotate extends Component {
  static propTypes = {};
  static defaultProps = {};

  componentDidMount() {}

  render() {
    const { motion: { xDeg, yDeg, zDeg } } = this.props;
    // console.log(motion);
    return (
      <Root>
        <IconBox zDeg={zDeg}>
          <Icon src={FacebookIcon} />
          <Icon src={InstagramIcon} />
          <Icon src={LinkedInIcon} />
        </IconBox>
      </Root>
    );
  }
}

export default withRotate(Rotate);
