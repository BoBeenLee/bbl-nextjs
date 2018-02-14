import { configure } from "@kadira/storybook";
import _ from "lodash";

const req = require.context("../", true, /.stories.js$/);

function loadStories() {
  _.forEach(req.keys(), req);
}

configure(loadStories, module);
