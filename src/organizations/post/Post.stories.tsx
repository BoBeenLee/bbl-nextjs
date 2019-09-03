import { action } from "@storybook/addon-actions";
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Caption } from ".";

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

storiesOf("Organization Post", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("with Caption", () => (
    <Child>
      <Caption url="" title="test" description="testtest" />
    </Child>
  ));
