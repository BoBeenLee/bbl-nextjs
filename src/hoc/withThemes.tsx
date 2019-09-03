import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';

function withThemes(TargetComponent) {
  return function WithThemes(props) {
    return (
      <ThemeProvider theme={theme}>
        <TargetComponent {...props} />
      </ThemeProvider>
    );
  };
}

export default withThemes;
