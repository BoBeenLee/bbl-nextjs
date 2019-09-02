import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { isBrowser } from "../utils/navigator";

class Rotate extends Component<any> {
  public static defaultProps = {};

  public state = {
    alpha: 0,
    beta: 0,
    gamma: 0,
    orientation: 0
  };

  public componentDidMount() {
    if (!this._hasDeviceOrientation()) {
      return;
    }
    const orientation = isBrowser ? window.orientation : 0;

    isBrowser &&
      window.addEventListener(
        "deviceorientation",
        ev => {
          const { alpha, beta, gamma } = ev;
          this.setState({ alpha, beta, gamma });
        },
        false
      );

    isBrowser &&
      window.addEventListener(
        "orientationchange",
        ev => {
          this.setState({ orientation });
        },
        false
      );
  }

  public getX() {
    return this.state.gamma || 0;
  }

  public getY() {
    return this.state.beta || 0;
  }

  public getOrientZ() {
    return this.state.alpha || 0;
  }

  /**
   * @returns {Number} Value of X in degrees, corrected for device orientation.
   */
  public getXDeg() {
    switch (this.state.orientation) {
      case 90:
        return -this.getX();
      case 0:
        return this.getY();
      case -90:
        return this.getX();
      case 180:
        return this.getY();
      default:
        throw new Error("Not expected XDeg");
    }
  }

  /**
   * @returns {Number} Value of Y in degrees, corrected for device orientation.
   */
  public getYDeg() {
    switch (this.state.orientation) {
      case 90:
        return -this.getY();
      case 0:
        return -this.getX();
      case -90:
        return this.getY();
      case 180:
        return this.getX();
      default:
        throw new Error("Not expected YDeg");
    }
  }

  /**
   * @returns {Number} Value of Z in degrees, corrected for device orientation.
   */
  public getZDeg() {
    return this.getOrientZ();
  }

  public _hasDeviceOrientation = () =>
    isBrowser && !!(window as any).DeviceOrientationEvent;

  public render() {
    const xDeg = this.getXDeg();
    const yDeg = this.getYDeg();
    const zDeg = this.getZDeg();
    //   console.log("x,y,z", xDeg, yDeg, zDeg);
    return (this.props.children as any)({ xDeg, yDeg, zDeg });
  }
}

export default Rotate;
