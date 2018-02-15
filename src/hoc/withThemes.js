import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';
import theme from "../constants/theme";

function withThemes(TargetComponent) {
  return class WithThemes extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
      return (
        <ThemeProvider theme={theme}>
          <TargetComponent { ...this.props } />
        </ThemeProvider>
      );
    }
  };
}

export default withThemes;
