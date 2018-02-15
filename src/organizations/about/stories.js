import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import styled from "styled-components";
import { About, Education, Experience, Activity, Skill } from "./";

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
  .add("with About", () => (
    <Child>
      <About onPress={action("clicked")} />
    </Child>
  )).add("with Education", () => (
    <Child>
      <Education onPress={action("clicked")} />
    </Child>
  )).add("with Experience", () => (
    <Child>
      <Experience onPress={action("clicked")} />
    </Child>
  )).add("with Activity", () => (
    <Child>
      <Activity onPress={action("clicked")} />
    </Child>
  )).add("with Skill", () => (
    <Child>
      <Skill onPress={action("clicked")} />
    </Child>
  ));
