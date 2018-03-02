import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { Rotate } from '../facc';

function withRotate(TargetComponent) {
  return class WithRotate extends Component {
    render() {
      //   console.log("x,y,z", xDeg, yDeg, zDeg);
      return <Rotate>{({ xDeg, yDeg, zDeg }) => <TargetComponent motion={{ xDeg, yDeg, zDeg }} {...this.props} /> }</Rotate>;
    }
  };
}

export default withRotate;
