import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { configure, addDecorator } from "@kadira/storybook";
import _ from "lodash";
import theme from "../src/constants/theme";
import '../src/layouts/index.css';

const req = require.context("../", true, /.stories.js$/);

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

function loadStories() {
  // addDecorator(withThemes);
  _.forEach(req.keys(), req);
}

configure(loadStories, module);
