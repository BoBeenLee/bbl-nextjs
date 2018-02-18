import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { configure, addDecorator } from "@kadira/storybook";
import _ from "lodash";
import { BrowserRouter } from "react-router-dom";
import theme from "../src/constants/theme";
import '../src/layouts/styles';

const req = require.context("../", true, /.stories.js$/);

addDecorator(storyFn => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </BrowserRouter>
));

function loadStories() {
  // addDecorator(withThemes);
  _.forEach(req.keys(), req);
}

configure(loadStories, module);
