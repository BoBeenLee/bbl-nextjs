import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { isBrowser } from '../utils/NavigatorUtils';
class Rotate extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    alpha: 0,
    beta: 0,
    gamma: 0,
    orientation: 0
  };

  _hasDeviceOrientation = () => isBrowser && !!window.DeviceOrientationEvent;

  componentDidMount() {
    if (!this._hasDeviceOrientation()) {
      return;
    }
    const orientation = isBrowser ? window.orientation : 0;

    isBrowser && window.addEventListener(
      "deviceorientation",
      ev => {
        const { alpha, beta, gamma } = ev;
        this.setState({ alpha, beta, gamma });
      },
      false
    );

    isBrowser && window.addEventListener(
      "orientationchange",
      ev => {
        this.setState({ orientation });
      },
      false
    );
    this.setState({ orientation });
  }

  getX() {
    return this.state.gamma || 0;
  }

  getY() {
    return this.state.beta || 0;
  }

  getOrientZ() {
    return this.state.alpha || 0;
  }

  /**
   * @returns {Number} Value of X in degrees, corrected for device orientation.
   */
  getXDeg() {
    switch (this.state.orientation) {
      case 90:
        return -this.getX();
        break;
      case 0:
        return this.getY();
        break;
      case -90:
        return this.getX();
        break;
      case 180:
        return this.getY();
        break;
    }
  }

  /**
   * @returns {Number} Value of Y in degrees, corrected for device orientation.
   */
  getYDeg() {
    switch (this.state.orientation) {
      case 90:
        return -this.getY();
        break;
      case 0:
        return -this.getX();
        break;
      case -90:
        return this.getY();
        break;
      case 180:
        return this.getX();
        break;
    }
  }

  /**
   * @returns {Number} Value of Z in degrees, corrected for device orientation.
   */
  getZDeg() {
    return this.getOrientZ();
  }

  render() {
    const xDeg = this.getXDeg();
    const yDeg = this.getYDeg();
    const zDeg = this.getZDeg();
    //   console.log("x,y,z", xDeg, yDeg, zDeg);
    return this.props.children({ xDeg, yDeg, zDeg });
  }
};

export default Rotate;
