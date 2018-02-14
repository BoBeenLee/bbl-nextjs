import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import styled from "styled-components";
import { GithubCard } from "./";

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

storiesOf("Card", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("with GithubCard", () => (
    <Child>
      <GithubCard onPress={action("clicked")} />
    </Child>
  ));
