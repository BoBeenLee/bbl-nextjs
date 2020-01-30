import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "src/constants/theme";

function withThemes<P>(TargetComponent: any) {
  return function WithThemes(props: P) {
    return (
      <ThemeProvider theme={theme}>
        <TargetComponent {...props} />
      </ThemeProvider>
    );
  };
}

export default withThemes;
