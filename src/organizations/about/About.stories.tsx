import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import {
  Activity,
  Education,
  Experience,
  Skill
} from "src/organizations/about";

const Root = styled.div`
  display: grid;
  grid-auto-columns: 50px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

const Child = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

storiesOf("Organization About", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("with Education", () => (
    <Child>
      <Education />
    </Child>
  ))
  .add("with Experience", () => (
    <Child>
      <Experience />
    </Child>
  ))
  .add("with Activity", () => (
    <Child>
      <Activity />
    </Child>
  ))
  .add("with Skill", () => (
    <Child>
      <Skill />
    </Child>
  ));
